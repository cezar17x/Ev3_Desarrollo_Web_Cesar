Buscador de Personajes de  Hunter x Hunter

Este sitio web te permite buscar y explorar personajes del anime **Hunter x Hunter**. Puedes filtrar por nombre y tipo de Nen para encontrar a tu favorito fácilmente.

¿Qué se puede hacer?

-  Ver una lista de personajes del anime.
-  Buscar personajes por nombre (por ejemplo: Gon, Kurapika...).
-  Filtrar por tipo de Nen: Refuerzo(intensificador), Emisión, Transformación, etc.

¿Cómo usar?

1. Abre el archivo `index.html` en tu navegador (idealmente usando Live Server o cargándolo desde un servidor).
2. Escribe el nombre del personaje que quieres buscar.
3. O selecciona un tipo de Nen desde el menú desplegable.
4. ¡Disfruta explorando el mundo de Hunter x Hunter!

Sobre el proyecto

- Datos obtenidos desde una base de datos local (no requiere conexión externa).
- Las imágenes están almacenadas dentro del proyecto (assets/img)

Notas

- Este proyecto es solo con fines educativos.
- Hunter x Hunter es una obra original de Yoshihiro Togashi.  
  Todos los derechos sobre los personajes pertenecen a sus respectivos dueños.

Codigo SQL en el que se baso(URl de las imagenes no son funcionales en el ejemplo):

CREATE DATABASE hunterxhunter;
USE hunterxhunter;

CREATE TABLE characters (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50),
  tipo_nen VARCHAR(30),
  imagen_url VARCHAR(255)
);

INSERT INTO personajes (nombre, tipo_nen, imagen_url) VALUES
('Gon Freecss', 'Refuerzo', 'https://static.wikia.nocookie.net/hunterxhunter/images/3/3e/HxH2011_EP147_Gon_Portrait.png/revision/latest?cb=20230904181801'),
('Killua Zoldyck', 'Transformación', 'https://static.wikia.nocookie.net/hunterxhunter/images/f/f1/KilluaSuperZetsu.png/revision/latest/scale-to-width-down/732?cb=20140323022118&path-prefix=es'),
('Kurapika', 'Especialista', 'https://i.pinimg.com/736x/6e/60/14/6e6014898f310831e881881d3e574f14.jpg'),
('Leorio', 'Emisión', 'https://static.wikia.nocookie.net/hunterxhunter/images/b/b2/Leorio_2011.png'),
('Hisoka', 'Transformación', 'https://static.wikia.nocookie.net/hunterxhunter/images/2/29/Hisoka_Morow_YC_Portrait.png/revision/latest?cb=20190123172039'),
('Chrollo Lucilfer', 'Especialista', 'https://static.wikia.nocookie.net/universecw/images/8/85/Chrollo-Lucilfer.jpg/revision/latest?cb=20201121143434&path-prefix=es');
