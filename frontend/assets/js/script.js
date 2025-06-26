const contenedorPersonajes = document.getElementById('personajes-section');
const filtroNombre = document.getElementById('filtro-nombre');
const filtroNen = document.getElementById('filtro-nen');

// Funcion para mostrar los personajes 
function mostrarPersonajes(lista) {
  contenedorPersonajes.innerHTML = '';

  if (lista.length === 0) {
    contenedorPersonajes.innerHTML = '<p style="color: white; text-align: center;">No se encontraron personajes con esos criterios.</p>';
    return;
  }

  lista.forEach(p => {
    const card = document.createElement('article');
    card.classList.add('personaje-card');

    const nombreArchivo = p.nombre.toLowerCase().split(' ')[0];
    const rutaImagen = `assets/img/${nombreArchivo}.png`;

    card.innerHTML = `
      <img src="${rutaImagen}" alt="${p.nombre}" class="personaje-img" width="150" height="150" onerror="this.src='assets/img/default.png'" />
      <h2>${p.nombre}</h2>
      <p><strong>Tipo de Nen:</strong> ${p.tipo_nen}</p>
    `;

    contenedorPersonajes.appendChild(card);
  });
}

// Función que se comunica con el servidor para obtener datos 
function fetchDataConFiltros() {
  const nombre = filtroNombre.value;
  const nen = filtroNen.value;

  const url = new URL('http://localhost:3000/personajes');
  if (nombre) {
    url.searchParams.append('nombre', nombre);
  }
  if (nen) {
    url.searchParams.append('nen', nen);
  }

  fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error(`Error HTTP! estado: ${res.status}`);
      }
      return res.json();
    })
    .then(data => {
      mostrarPersonajes(data);
    })
    .catch(err => {
      contenedorPersonajes.innerHTML = '<p style="color: red; text-align: center;">Error al conectar con el servidor. Asegúrate de que esté corriendo y revisa la consola del navegador.</p>';
      console.error('Error en fetch:', err);
    });
}

filtroNombre.addEventListener('input', fetchDataConFiltros);
filtroNen.addEventListener('change', fetchDataConFiltros);

document.addEventListener('DOMContentLoaded', fetchDataConFiltros);