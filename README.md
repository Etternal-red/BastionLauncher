
# Bienvenido al Bastión Launcher
El Bastión Launcher está basado en [**HeliosLauncher**](https://github.com/dscalzi/HeliosLauncher). Recomiendo que si necesitas hacer tu propio launcher, no uses este, ya que está integrado con el servidor de Bastión y es recomendado solo usarlo para asuntos relacionados a servidores que usen el Yggdrasil de Bastión.

[![Build Status](https://travis-ci.org/Etternal-red/EtternalLauncher.svg?branch=master)](https://travis-ci.org/Etternal-red/EtternalLauncher)



# Como empezar

Primero que todo, necesitas [**Node.js v12**](https://nodejs.org/en/). Para programar, se recomienda usar [**Visual Code Studio**](https://code.visualstudio.com/).

### Compilar todo
Este ejemplo usa este launcher como base, pero como dije anteriormente, es recomendado empezar con el original Helios Launcher.

    > git clone https://github.com/jacquelynra/Etternal-Launcher.git
    > cd HeliosLauncher
    > npm install

### Uso
Para iniciar la aplicación
`> npm start`

Para crear la distribución

| Plataforma | Comando |
| -- | -- |
| Windows x64 | `> npm run dist:win` |
| macOS | `> npm run dist:mac` |
| Linux x64 | `> npm run dist:linux` |

### Nebula
Para crear tu propio distribution.json, que es el archivo que se usa para indicar el servidor que quiere tu launcher, debes hacer lo siguiente.
`> git clone https://github.com/dscalzi/Nebula`

Ahora muevete hasta el directorio Nebula, e instala todas las dependencias usando el siguiente comando.
`> npm i`

En la carpeta de Nebula, crea un archivo `.env` que contenga lo siguiente

    JAVA_EXECUTABLE=
    ROOT=
    BASE_URL=

Para conseguir que poner en **JAVA_EXECUTABLE**, haz lo siguiente

| Plataforma | Comando |
| -- | -- |
| Windows |  `where java` |
| Linux |  `whereis java` |
| MacOS | Es más complicado |

El **ROOT** debe ser una ruta válida. Por ejemplo, para obtener una en Windows, abre el Explorador y ve a la carpeta deseada. Apretando Shift+Click derecho sobre una carpeta nueva podrás ver una opción llamada *Copiar como ruta de acceso*. Pega el resultado sin las comillas en el documento .env.

La **BASE_URL** será donde estén los archivos de tu juego en un servidor. Por ejemplo, si tienes el dominio example.com, y en el subdominio juego estarían los archivos, en BASE_URL debes poner juego.example.com.

Una vez creado el archivo .env, debes inicializar el directorio que seleccionaste en ROOT para que tenga todos los archivos necesarios. Para eso, usa el siguiente comando.
`> node dist/index.js init root`

Después, usa el siguiente comando para generar las carpetas del servidor.
``> node dist/index.js generate server [Nombre del servidor] [Versión] --forge [Versión de Forge``
En versión de Forge, puedes usar recommended o latest, que serían la última versión recomendada o la última versión incluidas las que están en prueba.

Una vez hecho esto, pon los mods en la carpeta servers\[nombre-versión]\forgemods. Si tienes archivos adicionales, ponlos en files. Estos se pondrán en el directorio base.

Como última parte genera todo usando el siguiente comando.
``> node dist/index.js generate distro``

**NOTA IMPORTANTE**: Durante la instalación, el instalador de Forge aparecerá. En la consola, aparecerá algo similar a lo siguiente.

>[info] [FG3 Adapter]: ============== [ IMPORTANT ] ==============

>[info] [FG3 Adapter]: When the installer opens please set the client installation directory to:

>[info] [FG3 Adapter]: [ROOT]\files\work

>[info] [FG3 Adapter]: =========================================

Deberás ir a ese directorio en el instalador de Forge para que todo salga correcto.

Chequea el archivo que esté todo correcto, e inserta el distribution.json tanto en el Launcher como en el servidor con los demás archivos.

# Otros proyectos - Recursos utilizados

 - [HeliosLauncher](https://github.com/dscalzi/HeliosLauncher/) - Launcher base.
 
 - [Nebula](https://github.com/dscalzi/Nebula) - Para hacer los distribution.json.

 - [Authlib-Injector](https://github.com/yushijinhun/authlib-injector) - Para parchear el servidor con el correcto sistema de autentificación.

 - [Codepen.io](https://codepen.io) - En general, inspiración para elementos de UI.
