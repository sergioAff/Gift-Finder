# Gif Finder

Gif Finder es una aplicación web que te permite buscar y visualizar GIFs utilizando la API de Giphy. Este proyecto está construido con React y utiliza Tailwind CSS para el diseño y la estilización.

## Características

- Búsqueda de GIFs.
- Visualización de GIFs en una cuadrícula responsiva.
- Indicador de carga mientras se obtienen los GIFs.

## Imagenes

## Vista en mobile
<img width="494" alt="Captura de pantalla 2024-07-26 a la(s) 9 04 45 a m" src="https://github.com/user-attachments/assets/8e31872a-50aa-4eda-b1fc-98f970fb8aab">

## Vista en dektop
<img width="1710" alt="Captura de pantalla 2024-07-26 a la(s) 9 01 11 a m" src="https://github.com/user-attachments/assets/3f3fef2e-d224-434e-ac42-59d76648e01d">

## Vista con busquedas
<img width="1710" alt="Captura de pantalla 2024-07-26 a la(s) 9 04 19 a m" src="https://github.com/user-attachments/assets/ce4f7f88-9a4e-44de-8955-204ccff3a947">

## Instalación

Para correr este proyecto localmente, sigue estos pasos:

1. Clona este repositorio
    ```
    git clone https://github.com/sergioAff/gif-finder.git](https://github.com/sergioAff/Gift-Finder.git
    ```
2. Navega al directorio del proyecto
    ```
    cd gif-finder
    ```
3. Instala las dependencias
    ```
    npm install
    ```
4. Corre la aplicación
    ```
    npm start
    ```

La aplicación estará disponible en `http://localhost:3000`.

## Uso

1. Escribe una categoría en el campo de búsqueda.
2. Presiona `Enter` para buscar GIFs relacionados con la categoría.
3. Los GIFs aparecerán en una cuadrícula debajo del campo de búsqueda.

## Tecnologías Utilizadas

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Giphy API](https://developers.giphy.com/docs/api/)

## Estructura del Proyecto

```
gif-finder/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── AddCategory.js
│   │   ├── GifGrid.js
│   │   ├── GifItem.js
│   │   ├── LoadingSpinner.js
│   │   └── ...
│   ├── hooks/
│   │   └── useFetchGifs.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
```

## API Key

Para utilizar la API de Giphy, necesitas una API Key. Puedes obtener una registrándote en [Giphy Developers](https://developers.giphy.com/). Una vez que tengas tu API Key, crea un archivo `.env` en la raíz del proyecto y agrega tu API Key de la siguiente manera:

```
REACT_APP_GIPHY_API_KEY=tu_api_key
```

## Contribuir

¡Las contribuciones son bienvenidas! Si tienes una idea para mejorar el proyecto, por favor abre un `issue` o envía un `pull request`.

1. Haz un fork del proyecto
2. Crea una nueva rama (`git checkout -b feature-nueva-caracteristica`)
3. Haz tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Haz un push a la rama (`git push origin feature-nueva-caracteristica`)
5. Abre un `pull request`

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para obtener más información.

## Contacto

Autor: Sergio Fernández (https://github.com/sergioAff/)
Email: sergioadrianfernandez02@gmail.com
