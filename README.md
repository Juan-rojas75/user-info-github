# Next.js User info - Github 🎬

Una aplicación de información de usuarios construida con Next.js que permite a los usuarios exporar información de usuarios de github

## 📋 Características

- 🔍 **Exploración de usuarios API GitHub:** Busca y explora usuarios de GitHub mediante su API.
- 🔧 **Integración con API Externa:** Utiliza la API de GitHub para obtener datos actualizados.
- 🌙 **Modo Oscuro:** Alterna entre modos claro y oscuro para una mejor experiencia visual.
- 🗄️ **Almacenamiento Local:** Guarda información de usuarios en localStorage para un acceso más rápido.
#
# 🛠 Tecnologías Utilizadas

- [Next.js](https://nextjs.org/) - Framework React para aplicaciones web.
- [TypeScript](https://www.typescriptlang.org/) - Superset de JavaScript tipado.
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS para estilos.
- [Axios](https://axios-http.com/) - Cliente HTTP para llamadas a la API.

## 🚀 Instalación

Sigue estos pasos para instalar y ejecutar la aplicación en tu máquina local.

### Prerrequisitos

- **Node.js**: Requiere Node.js versión 14 o superior.
- **NPM o Yarn**: Gestor de paquetes de Node.js.

### Pasos de Instalación

1. **Clona este repositorio:**

    ```bash
    git clone https://github.com/Juan-rojas75/user-info-github.git
    ```

2. **Instala las dependencias:**

    Usando npm:

    ```bash
    npm install
    ```

    O usando yarn:

    ```bash
    yarn install
    ```

3. **Configura las Variables de Entorno:**

    Crea un archivo `.development.env` en la raíz del proyecto y añade las siguientes variables de entorno:

4. **Inicia el Servidor de Desarrollo:**

    Usando npm:

    ```bash
    npm run dev
    ```

    O usando yarn:

    ```bash
    yarn dev
    ```

    Abre tu navegador y ve a `http://localhost:3000` para ver la aplicación en acción.

## 📂 Estructura del Proyecto

Una breve descripción de la estructura del proyecto:

```plaintext
.
├── components       # Componentes reutilizables
├── pages            # Páginas del proyecto
├── public           # Archivos públicos estáticos (imágenes, iconos, etc.)
├── styles           # Archivos CSS
├── utils            # Utilidades y funciones auxiliares
└── README.md        # Documentación del proyecto
