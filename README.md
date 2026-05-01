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


## Modelo de datos

La aplicación utiliza dos entidades principales: autores y libros.

### Autores

La entidad `autores` almacena la información de los autores registrados en la biblioteca.

| Campo | Tipo | Descripción |
|---|---|---|
| id | entero | Identificador único del autor |
| nombre | texto | Nombre del autor |
| nacionalidad | texto | Nacionalidad del autor |
| anio_nacimiento | entero | Año de nacimiento del autor |

### Libros

La entidad `libros` almacena la información de los libros registrados en la biblioteca.

| Campo | Tipo | Descripción |
|---|---|---|
| id | entero | Identificador único del libro |
| titulo | texto | Título del libro |
| genero | texto | Género del libro |
| anio_publicacion | entero | Año de publicación del libro |
| autor_id | entero | Identificador del autor al que pertenece el libro |

### Relación entre entidades

Un autor puede tener varios libros, pero cada libro pertenece a un único autor.

La relación se realiza mediante el campo `autor_id` de la tabla `libros`, que hace referencia al campo `id` de la tabla `autores`.

Relación:

`libros.autor_id` → `autores.id`

## Instalación y ejecución

Para ejecutar el proyecto es necesario tener instalado Node.js.

El proyecto está dividido en dos partes:

- `backend`: contiene la API REST.
- `frontend`: contiene la aplicación web.

### Backend

Desde la carpeta principal del proyecto, entrar en la carpeta del backend:

```bash
cd backend
```

Instalar las dependencias:

```bash
npm install
```

Ejecutar el backend:

```bash
npm run dev
```

El backend se ejecuta en:

```text
http://localhost:8080
```

Al iniciar el backend se crea automáticamente la base de datos SQLite y las tablas necesarias si no existen.

### Frontend

En otra terminal, desde la carpeta principal del proyecto, entrar en la carpeta del frontend:

```bash
cd frontend
```

Instalar las dependencias:

```bash
npm install
```

Ejecutar el frontend:

```bash
npm start
```

El frontend se ejecuta en:

```text
http://localhost:1234
```

## Uso de la aplicación

La aplicación tiene tres páginas principales:

| Página | Descripción |
|---|---|
| `index.html` | Página principal de la aplicación |
| `autores.html` | Página para gestionar autores |
| `libros.html` | Página para gestionar libros |

Desde la página de autores se puede:

- Crear autores.
- Consultar autores.
- Editar autores.
- Eliminar autores.

Desde la página de libros se puede:

- Crear libros.
- Consultar libros.
- Editar libros.
- Eliminar libros.
- Asociar cada libro a un autor.

## Endpoints de la API

La API sigue una estructura REST. Utiliza los métodos HTTP `GET`, `POST`, `PUT` y `DELETE`.

### Endpoints de autores

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/autores` | Lista todos los autores |
| GET | `/autores/:id` | Obtiene un autor por su id |
| POST | `/autores` | Crea un nuevo autor |
| PUT | `/autores/:id` | Modifica un autor existente |
| DELETE | `/autores/:id` | Elimina un autor |

### Endpoints de libros

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/libros` | Lista todos los libros |
| GET | `/libros/:id` | Obtiene un libro por su id |
| POST | `/libros` | Crea un nuevo libro |
| PUT | `/libros/:id` | Modifica un libro existente |
| DELETE | `/libros/:id` | Elimina un libro |
| GET | `/autores/:id/libros` | Lista los libros de un autor concreto |

## Ejemplos de peticiones

### Crear un autor

Petición:

```http
POST /autores
Content-Type: application/json
```

Cuerpo de la petición:

```json
{
  "nombre": "Miguel de Cervantes",
  "nacionalidad": "Española",
  "anio_nacimiento": 1547
}
```

Respuesta esperada:

```json
{
  "id": 1,
  "nombre": "Miguel de Cervantes",
  "nacionalidad": "Española",
  "anio_nacimiento": 1547
}
```

### Crear un libro

Petición:

```http
POST /libros
Content-Type: application/json
```

Cuerpo de la petición:

```json
{
  "titulo": "Don Quijote de la Mancha",
  "genero": "Novela",
  "anio_publicacion": 1605,
  "autor_id": 1
}
```

Respuesta esperada:

```json
{
  "id": 1,
  "titulo": "Don Quijote de la Mancha",
  "genero": "Novela",
  "anio_publicacion": 1605,
  "autor_id": 1
}
```

## Flujo de trabajo con Git

El proyecto se ha desarrollado utilizando ramas de trabajo y Pull Requests.

Cada funcionalidad se ha implementado en una rama independiente y posteriormente se ha fusionado en `develop`.

Algunas ramas utilizadas durante el desarrollo han sido:

- `feature/backend-setup`
- `feature/database`
- `feature/autores-backend`
- `feature/libros-backend`
- `feature/frontend-setup`
- `feature/autores-frontend`
- `feature/libros-frontend`
- `feature/readme`
- `feature/documentacion-api`

Este flujo de trabajo permite separar cada funcionalidad y revisar los cambios antes de incorporarlos a la rama principal de desarrollo.

## Funcionalidades implementadas

- Backend con API REST.
- Frontend con HTML, CSS y JavaScript.
- CRUD completo de autores.
- CRUD completo de libros.
- Base de datos SQLite.
- Relación entre autores y libros.
- Validaciones básicas en formularios del frontend.
- Proyecto gestionado con Git, GitHub, ramas y Pull Requests.