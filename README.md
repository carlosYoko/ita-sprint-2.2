# Throttle Function

Aplicación throttle function utilizando TypeScript y el patrón MVC.
Incluye interfaz CLI, testing y frontend básico en HTML.

##### Trabajo del Sprint 2.2 de IT-Academy en la especialización de Node.js.

###### Descripción del ejercicio:

La función throttle se utiliza para limitar la frecuencia de ejecución de una función en respuesta a eventos repetidos. A diferencia de la función debounce, que retrasa la ejecución de la función hasta que no se produce ningún evento durante un tiempo determinado, la función throttle permite ejecutar la función en intervalos de tiempo regulares.

En otras palabras, la función throttle establecerá un intervalo de tiempo entre las ejecuciones de la función para asegurarse de que no se ejecute más a menudo de lo necesario. Esta técnica es útil cuando se desea controlar la frecuencia de ejecución de una función en respuesta a eventos repetitivos, como desplazamientos, actualizaciones de interfaces de usuario o llamadas a funciones costosas.

- Implementar una función throttle utilizando TypeScript y TDD.

⭐ Nivel 1  
Implementa una función throttle utilizando TypeScript y TDD.  
Utiliza pruebas para verificar la funcionalidad de la función throttle.

⭐⭐ Nivel 2  
Crea una interfaz de línea de comandos (CLI) para verificar la funcionalidad de la función throttle.

⭐⭐⭐ Nivel 3  
Crea un front-end para verificar la funcionalidad de la función throttle.

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
