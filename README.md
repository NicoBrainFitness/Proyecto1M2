# Proyecto1M2
# Creación Encuestas

Este proyecto permite a los usuarios crear encuestas, votar y ver los resultados. El programa se describe de la siguiente manera:
## Funcionalidades

- **Crear Encuestas:** Los usuarios pueden crear nuevas encuestas ingresando preguntas.
- **Votar en Encuestas:** Los usuarios pueden votar en las encuestas existentes seleccionando una pregunta y una opción de respuesta.
- **Ver Resultados:** Los usuarios pueden ver los resultados de las encuestas, incluyendo el número de votos para cada opción de respuesta.

## Cómo Usar

1. **Crear una Nueva Encuesta:**
   - Ejecute el programa y siga las instrucciones para crear una nueva encuesta.
   - Ingrese las preguntas para la encuesta cuando se le solicite.

2. **Votar en una Encuesta:**
   - Después de crear una encuesta, puede votar en ella seleccionando la opción correspondiente en el menú.
   - Seleccione la encuesta en la que desea votar.
   - Seleccione la pregunta en la que desea votar.
   - Seleccione la opción de respuesta en la que desea votar.

3. **Ver Resultados:**
   - Después de crear o votar en una encuesta, puede ver los resultados ejecutando el programa.
   - Los resultados de todas las encuestas creadas se mostrarán en la consola.

## Explicación del Código

```javascript
// Declaración de la clase Encuesta
class Encuesta {
    constructor(preguntas) {
        // ...
    }

    votar(preguntaIndex) {
        // ...
    }

    mostrarResultados() {
        // ...
    }
}

// Declaración de la variable encuestas
let encuestas = [];

// Funciones para crear, mostrar y votar en encuestas
// ...

// Crear una nueva encuesta
crearEncuesta();

// Mostrar todas las encuestas
mostrarEncuestas();

// Permitir a los usuarios votar en una encuesta
votarEnEncuesta();
