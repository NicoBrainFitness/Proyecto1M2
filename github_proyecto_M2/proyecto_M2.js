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
