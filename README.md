\# Biblioteca



Aplicación web para la gestión de una biblioteca personal.



El proyecto permite gestionar autores y libros mediante una aplicación dividida en dos partes:



\- \*\*Backend\*\*: API REST desarrollada con Node.js, Express y SQLite.

\- \*\*Frontend\*\*: aplicación web desarrollada con HTML, JavaScript, Bootstrap y Axios.



\## Descripción del proyecto



La aplicación permite realizar operaciones CRUD completas sobre dos entidades principales:



\- Autores

\- Libros



Cada libro pertenece a un autor, por lo que existe una relación entre ambas entidades.



\## Tecnologías utilizadas



\### Backend



\- Node.js

\- Express

\- SQLite

\- Knex

\- CORS

\- Nodemon



\### Frontend



\- HTML

\- CSS

\- JavaScript

\- Bootstrap

\- Axios

\- Parcel



\### Herramientas



\- Git

\- GitHub

\- Pull Requests

\- Thunder Client / Postman / Hoppscotch para probar la API



\## Estructura del proyecto



```text

biblioteca

├── backend

│   ├── src

│   │   ├── app.js

│   │   ├── configuration

│   │   │   └── database.js

│   │   ├── controller

│   │   │   ├── autores.js

│   │   │   └── libros.js

│   │   ├── database

│   │   │   └── init.js

│   │   ├── route

│   │   │   ├── autores.js

│   │   │   └── libros.js

│   │   └── service

│   │       ├── autores.js

│   │       └── libros.js

│   └── package.json

│

├── frontend

│   ├── src

│   │   ├── index.html

│   │   ├── autores.html

│   │   ├── libros.html

│   │   ├── autores.js

│   │   ├── libros.js

│   │   └── styles.css

│   └── package.json

│

├── README.md

└── .gitignore

