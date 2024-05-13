<h1> <img src = "https://github.com/NicoBrainFitness/Proyecto1M2/blob/main/banner.png"> "PROYECTO 2: Sistema de Votación en JavaScript"</h1>

# Proyecto1M2
# Objetivo General del proyecto

Este proyecto mediante la programación orientada a objetos (POO) permite a los usuarios crear encuestas, votar y ver los resultados aplicando comandos en terminal. Este programa se podrá ejecutar en el navegador, para visualizarse a través de la consola, enlazado a un archivo HTML.

## Objetivo especifico del proyecto

1. Permitir a los usuarios crear encuestas con opciones de respuesta.
2. Permitir a los usuarios votar en las encuestas.
3. Mostrar los resultados de las encuestas en tiempo real.
4. Almacenar los datos de las encuestas y los votos en una variable.

## 1. Permitir a los usuarios crear encuestas con opciones de respuesta (en este caso son solo dos opciones por pregunta)
```javascript
// Definición de la clase Encuesta

class Encuesta {
    constructor() {
        this.encuestas = [];
    }
// Definición de la forma de crear la encuesta con dos opciones solamente
    crearEncuesta() {
        let pregunta = prompt("Ingrese una pregunta para la encuesta (max 8):");
        let opciones = [];

        for (let i = 0; i < 2; i++) {
            opciones.push(prompt(`Ingrese la opción ${i + 1}:`));
        }

        this.encuestas.push({ pregunta: pregunta, opciones: opciones, votos: [0, 0] });
        console.log("Pregunta creada");
    }
```
## 2. Permitir a los usuarios votar en las encuestas.
```javascript
// Definición para votar las opciones de pregunta ingresadas
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
```
## 3. Mostrar los resultados de las encuestas en tiempo real.
```javascript
// Definición para mostrar la encuesta
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
```
## 4. Almacenar los datos de las encuestas y los votos en una variable.
```javascript
// Definición para almacenar los datos de las encuestas y votos
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
```
## 5. Ejecutar el proceso antes descrito:
```javascript
//Definición para ejecución del proceso:

// Crear una nueva encuesta
let encuesta = new Encuesta();

// Crear 8 encuestas
for (let i = 0; i < 8; i++) {
    encuesta.crearEncuesta();
    encuestasYVotos.agregarEncuesta(encuesta.encuestas[i]);
}

// Mostrar las encuestas creadas
encuestasYVotos.mostrarEncuestas();

// Permitir a los usuarios votar
for (let i = 0; i < 8; i++) {
    encuesta.votar();
}

// Mostrar las encuestas actualizadas
encuestasYVotos.mostrarEncuestas();
```
## Pantalla de consola con las preguntas creadas:
<h1> <img src = "https://github.com/NicoBrainFitness/Proyecto1M2/blob/main/Preguntas creadas_consola.png"></h1>

## Pantalla de consola con las preguntas votadas:
<h1> <img src = "https://github.com/NicoBrainFitness/Proyecto1M2/blob/main/Votos realizados_consola.png"></h1>


Gracias por la oportunidad!
José Nicolás Rodríguez
