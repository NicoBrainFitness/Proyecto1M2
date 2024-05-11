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
// Definición de la clase Encuesta
class Encuesta {
    constructor() {
        this.encuestas = [];
    }

    crearEncuesta() {
        let pregunta = prompt("Ingrese la pregunta de la encuesta (max 8):");
        let opciones = [];

        for (let i = 0; i < 2; i++) {
            opciones.push(prompt(`Ingrese la opción ${i + 1}:`));
        }

        this.encuestas.push({ pregunta: pregunta, opciones: opciones, votos: [0, 0] });
        console.log("Pregunta creada");
    }

    mostrarEncuestas() {
        console.log("Encuestas:");
        this.encuestas.forEach((encuesta, index) => {
            console.log(`Pregunta ${index + 1}: ${encuesta.pregunta}`);
            console.log("Opciones de respuesta:");
            encuesta.opciones.forEach((opcion, opcionIndex) => {
                console.log(`${opcionIndex + 1}. ${opcion} - ${encuesta.votos[opcionIndex]} votos`);
            });
        });
    }

    votar() {
        let preguntaIndex = 0;
        let opcionIndex = 0;

        while (true) {
            preguntaIndex = parseInt(prompt("¿Qué número de pregunta desea votar?"));
            opcionIndex = parseInt(prompt("¿Qué opción 1 o 2 desea votar?"));

            if (preguntaIndex >= 0 && preguntaIndex < this.encuestas.length && opcionIndex >= 0 && opcionIndex < 2) {
                this.encuestas[preguntaIndex].votos[opcionIndex]++;
                console.log("Opción Elegida");
                break;
            } else {
                console.log("No valido");
            }
        }
    }
}

// Almacenar los datos de las encuestas y votos
let encuestasYVotos = {
    encuestas: [],
    agregarEncuesta: function(encuesta) {
        this.encuestas.push(encuesta);
    },
    mostrarEncuestas: function() {
        console.log("Encuestas:");
        this.encuestas.forEach((encuesta, index) => {
            console.log(`Pregunta ${index + 1}: ${encuesta.pregunta}`);
            console.log("Opciones de respuesta:");
            encuesta.opciones.forEach((opcion, opcionIndex) => {
                console.log(`${opcionIndex + 1}. ${opcion} - ${encuesta.votos[opcionIndex]} votos`);
            });
        });
    }
};

// Crear una nueva encuesta
let encuesta = new Encuesta();

// Crear 2 encuestas
for (let i = 0; i < 2; i++) {
    encuesta.crearEncuesta();
    encuestasYVotos1.agregarEncuesta(encuesta.encuestas[i]);
}

// Mostrar las encuestas creadas
encuestasYVotos.mostrarEncuestas();

// Permitir a los usuarios votar
for (let i = 0; i < 2; i++) {
    encuesta.votar();
    encuestasYVotos2.agregarEncuesta(encuesta.votar[i]);
}

// Mostrar las encuestas actualizadas
encuestasYVotos1.mostrarEncuestas();
encuestasYVotos2.mostrarEncuestas();
