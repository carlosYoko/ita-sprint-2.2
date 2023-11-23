# Throttle Function

Trabajo del Sprint 2.2 de IT-Academy en la especialización de Node.js.<br>
Aplicación throttle function utilizando TypeScript y el patrón MVC.<br>
Incluye interfaz CLI, testing y frontend básico en HTML.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

## Instalación

Para clonar el repositorio e instalar las dependencias necesarias, usa los siguientes comandos:

```bash
git clone https://github.com/carlosYoko/ita-sprint-2.2.git
cd ita-sprint-2.2
npm install
```

## Comandos

### Para transpilar el proyecto:

Para transpilar el proyecto, usa el siguiente comando:

```bash
npm run build
```

### Ejecutar la aplicacion por CLI

Para ejecutar la aplicacion mediante CLI, usa el siguiente comando:
Este comando ejecuta el CLI del proyecto compilado.

```bash
npm run start
```

### Ejecutar tests

Para ejecutar los tests, usa el siguiente comando:

```bash
npm run test
```

## Frontend

## Funcionalidades adicionales

En el frontend, he incluido salidas por la consola para proporcionar información sobre las siguientes acciones:

- **Número de clicks:** Cada vez que se hace click en el botón, se imprimira en el DOM y se mostrara por consola el número de veces que se ha hecho click.

- **Número de veces que se ha ejecutado la funcion:** Si la función throttle se ha resuelto correctamente se imprimirá en el DOM y se mostrara también por consola.
  En el caso de que se llame a la función antes de que el retardo haya finalizado, no se mostrará en el DOM que se ha ejecutado la función y tambien se imprimirá el mensaje de error en la consola.

## Licencia

Este proyecto está bajo la Licencia MIT - consulta el archivo LICENSE.md para más detalles.
