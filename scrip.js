// ===============================
// FECHA DE INICIO
// ===============================

const fechaInicio = new Date("2026-09-08");
const hoy = new Date();

// ===============================
// CALCULAR SEMANA
// ===============================

const diferencia = hoy - fechaInicio;

const diasPasados = Math.floor(diferencia / (1000 * 60 * 60 * 24));

let numeroSemana = Math.floor(diasPasados / 7);

if (numeroSemana < 0) {
  numeroSemana = 0;
}

// ===============================
// RUTINAS
// ===============================

const rutinas = [
  // ===========================
  // SEMANA 1
  // ===========================

  [
    {
      dia: "Lunes",
      ejercicios: [
        "Sentadillas — 3 x 10",
        "Puente de glúteos — 3 x 12",
        "Elevación de pantorrillas — 3 x 12",
      ],
    },

    {
      dia: "Martes",
      ejercicios: ["Zancadas — 3 x 8 por lado", "Sentadillas suaves — 3 x 10"],
    },

    {
      dia: "Miércoles",
      descanso: true,
    },

    {
      dia: "Jueves",
      ejercicios: [
        "Sentadillas — 3 x 12",
        "Puente de glúteos — 3 x 12",
        "Pantorrillas — 3 x 15",
      ],
    },

    {
      dia: "Viernes",
      ejercicios: [
        "Zancadas hacia atrás — 3 x 8 por lado",
        "Sentadilla isométrica — 3 rondas cortas",
      ],
    },

    {
      dia: "Sábado",
      descanso: true,
    },

    {
      dia: "Domingo",
      descanso: true,
    },
  ],

  // ===========================
  // SEMANA 2
  // ===========================

  [
    {
      dia: "Lunes",
      ejercicios: [
        "Sentadillas — 3 x 12",
        "Puente de glúteos — 3 x 15",
        "Pantorrillas — 3 x 15",
      ],
    },

    {
      dia: "Martes",
      ejercicios: ["Zancadas — 3 x 10 por lado", "Step-ups — 3 x 10"],
    },

    {
      dia: "Miércoles",
      descanso: true,
    },

    {
      dia: "Jueves",
      ejercicios: [
        "Sentadillas con pausa — 3 x 10",
        "Puente de glúteos — 3 x 15",
      ],
    },

    {
      dia: "Viernes",
      ejercicios: ["Zancadas hacia atrás — 3 x 10", "Pantorrillas — 3 x 18"],
    },

    {
      dia: "Sábado",
      descanso: true,
    },

    {
      dia: "Domingo",
      descanso: true,
    },
  ],

  // ===========================
  // SEMANA 3
  // ===========================

  [
    {
      dia: "Lunes",
      ejercicios: [
        "Sentadillas — 4 x 10",
        "Puente de glúteos — 4 x 12",
        "Pantorrillas — 3 x 18",
      ],
    },

    {
      dia: "Martes",
      ejercicios: ["Zancadas — 3 x 10", "Step-ups — 3 x 12"],
    },

    {
      dia: "Miércoles",
      descanso: true,
    },

    {
      dia: "Jueves",
      ejercicios: [
        "Sentadilla con pausa — 3 x 10",
        "Puente de glúteos — 3 x 15",
      ],
    },

    {
      dia: "Viernes",
      ejercicios: ["Zancadas laterales — 3 x 8", "Pantorrillas — 3 x 20"],
    },

    {
      dia: "Sábado",
      descanso: true,
    },

    {
      dia: "Domingo",
      descanso: true,
    },
  ],
];

// ===============================
// SELECCIONAR RUTINA
// ===============================

const rutinaActual = rutinas[numeroSemana % rutinas.length];

// ===============================
// FECHA DE LA SEMANA
// ===============================

const inicioSemana = new Date(fechaInicio);

inicioSemana.setDate(fechaInicio.getDate() + numeroSemana * 7);

const finSemana = new Date(inicioSemana);

finSemana.setDate(inicioSemana.getDate() + 6);

// ===============================
// FORMATO FECHA
// ===============================

function formatoFecha(fecha) {
  return fecha.toLocaleDateString("es-CO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// ===============================
// MOSTRAR INFORMACIÓN
// ===============================

document.getElementById("semanaTitulo").innerText =
  "🦵 Semana " + (numeroSemana + 1);

document.getElementById("fechaSemana").innerText =
  formatoFecha(inicioSemana) + " hasta " + formatoFecha(finSemana);

// ===============================
// MENSAJES BONITOS
// ===============================

const mensajes = [
  {
    titulo: "🎉 ¡Excelente!",
    texto: "Cada pequeño paso cuenta. ¡Sigue avanzando!",
  },

  {
    titulo: "💪 ¡Muy bien!",
    texto: "La constancia se construye día a día.",
  },

  {
    titulo: "🔥 ¡Lo lograste!",
    texto: "Buen trabajo. Ahora recuerda descansar y recuperarte.",
  },

  {
    titulo: "⭐ ¡Genial!",
    texto: "Estás cumpliendo contigo mismo. ¡Sigue así!",
  },

  {
    titulo: "🏆 ¡Reto completado!",
    texto: "No necesitas ser perfecto, solo seguir progresando.",
  },
];

// ===============================
// MENSAJES PARA DÍA COMPLETO
// ===============================

const mensajesDia = [
  {
    titulo: "🌟 ¡Día completado!",
    texto: "Terminaste todos los ejercicios de hoy. ¡Gran trabajo!",
  },

  {
    titulo: "🔥 ¡Qué buen trabajo!",
    texto: "Hoy cumpliste con tu reto. ¡Mañana puedes seguir avanzando!",
  },

  {
    titulo: "💪 ¡Un día más!",
    texto:
      "Lo importante es mantener la constancia. ¡Lo estás haciendo muy bien!",
  },

  {
    titulo: "❤️ ¡Reto del día cumplido!",
    texto: "Date crédito por el esfuerzo que hiciste hoy. ¡Sigue así!",
  },
];

// ===============================
// MENSAJE SEMANA COMPLETA
// ===============================

const mensajeSemana = {
  titulo: "🏆 ¡SEMANA COMPLETADA!",

  texto:
    "¡Increíble! Completaste todos tus retos de entrenamiento de esta semana. ¡Puedes estar orgulloso de tu constancia! 🎉💪",
};

// ===============================
// LOCAL STORAGE
// ===============================

const claveGuardado = "rutinaSemana_" + numeroSemana;

let ejerciciosCompletados =
  JSON.parse(localStorage.getItem(claveGuardado)) || [];

// ===============================
// CREAR RUTINA
// ===============================

const contenedor = document.getElementById("rutina");

rutinaActual.forEach(function (dia, indiceDia) {
  const fechaDia = new Date(inicioSemana);

  fechaDia.setDate(inicioSemana.getDate() + indiceDia);

  const tarjeta = document.createElement("div");

  tarjeta.classList.add("dia");

  // ==========================
  // DESCANSO
  // ==========================

  if (dia.descanso) {
    tarjeta.classList.add("descanso");

    tarjeta.innerHTML = `

                <h2>
                    ${dia.dia} 😴
                </h2>

                <p class="fecha">
                    ${formatoFecha(fechaDia)}
                </p>

                <h3>
                    🛌 Día de descanso
                </h3>

                <p>
                    Recuperarse también es parte del entrenamiento.
                </p>

            `;
  }

  // ==========================
  // EJERCICIOS
  // ==========================
  else {
    tarjeta.innerHTML = `

                <h2>
                    ${dia.dia} 🦵
                </h2>

                <p class="fecha">
                    ${formatoFecha(fechaDia)}
                </p>

            `;

    dia.ejercicios.forEach(function (ejercicio, indiceEjercicio) {
      const id = numeroSemana + "-" + indiceDia + "-" + indiceEjercicio;

      const completado = ejerciciosCompletados.includes(id);

      const ejercicioDiv = document.createElement("div");

      ejercicioDiv.classList.add("ejercicio");

      if (completado) {
        ejercicioDiv.classList.add("completado");
      }

      ejercicioDiv.innerHTML = `

                        <span>
                            ${ejercicio}
                        </span>

                        <button
                            class="completar"
                            onclick="completarEjercicio(
                                '${id}',
                                ${indiceDia}
                            )"
                        >

                            ${completado ? "✓ Completado" : "Completar"}

                        </button>

                    `;

      tarjeta.appendChild(ejercicioDiv);
    });
  }

  contenedor.appendChild(tarjeta);
});

// ===============================
// COMPLETAR EJERCICIO
// ===============================

function completarEjercicio(id, indiceDia) {
  // Evitar completar nuevamente
  if (ejerciciosCompletados.includes(id)) {
    return;
  }

  // Guardar ejercicio
  ejerciciosCompletados.push(id);

  localStorage.setItem(claveGuardado, JSON.stringify(ejerciciosCompletados));

  // Actualizar pantalla
  actualizarProgreso();

  // Verificar si terminó el día
  verificarDiaCompleto(indiceDia);

  // Actualizar botón
  const botones = document.querySelectorAll(".completar");

  botones.forEach(function (boton) {
    const onclickTexto = boton.getAttribute("onclick");

    if (onclickTexto && onclickTexto.includes("'" + id + "'")) {
      boton.innerText = "✓ Completado";

      boton.disabled = true;

      boton.parentElement.classList.add("completado");
    }
  });
}

// ===============================
// VERIFICAR DÍA COMPLETO
// ===============================

function verificarDiaCompleto(indiceDia) {
  const dia = rutinaActual[indiceDia];

  // Si es descanso, no hacer nada
  if (dia.descanso) {
    return;
  }

  let todosCompletados = true;

  dia.ejercicios.forEach(function (ejercicio, indiceEjercicio) {
    const id = numeroSemana + "-" + indiceDia + "-" + indiceEjercicio;

    if (!ejerciciosCompletados.includes(id)) {
      todosCompletados = false;
    }
  });

  if (todosCompletados) {
    mostrarMensajeDia();

    // Revisar si también terminó toda la semana
    setTimeout(function () {
      verificarSemanaCompleta();
    }, 500);
  }
}

// ===============================
// VERIFICAR SEMANA COMPLETA
// ===============================

function verificarSemanaCompleta() {
  let semanaCompleta = true;

  rutinaActual.forEach(function (dia, indiceDia) {
    if (dia.descanso) {
      return;
    }

    dia.ejercicios.forEach(function (ejercicio, indiceEjercicio) {
      const id = numeroSemana + "-" + indiceDia + "-" + indiceEjercicio;

      if (!ejerciciosCompletados.includes(id)) {
        semanaCompleta = false;
      }
    });
  });

  if (semanaCompleta) {
    mostrarMensajeSemana();
  }
}

// ===============================
// MOSTRAR MENSAJE DE EJERCICIO
// ===============================

function mostrarMensaje() {
  const mensajeAleatorio =
    mensajes[Math.floor(Math.random() * mensajes.length)];

  document.getElementById("tituloMensaje").innerText = mensajeAleatorio.titulo;

  document.getElementById("textoMensaje").innerText = mensajeAleatorio.texto;

  document.getElementById("mensaje").classList.remove("oculto");
}

// ===============================
// MOSTRAR MENSAJE DE DÍA
// ===============================

function mostrarMensajeDia() {
  const mensajeAleatorio =
    mensajesDia[Math.floor(Math.random() * mensajesDia.length)];

  document.getElementById("tituloMensaje").innerText = mensajeAleatorio.titulo;

  document.getElementById("textoMensaje").innerText = mensajeAleatorio.texto;

  document.getElementById("mensaje").classList.remove("oculto");
}

// ===============================
// MOSTRAR MENSAJE SEMANAL
// ===============================

function mostrarMensajeSemana() {
  document.getElementById("tituloMensaje").innerText = mensajeSemana.titulo;

  document.getElementById("textoMensaje").innerText = mensajeSemana.texto;

  document.getElementById("mensaje").classList.remove("oculto");
}

// ===============================
// CERRAR MENSAJE
// ===============================

function cerrarMensaje() {
  document.getElementById("mensaje").classList.add("oculto");
}

// ===============================
// BARRA DE PROGRESO
// ===============================

function actualizarProgreso() {
  let totalEjercicios = 0;

  rutinaActual.forEach(function (dia) {
    if (!dia.descanso) {
      totalEjercicios += dia.ejercicios.length;
    }
  });

  const completados = ejerciciosCompletados.length;

  const porcentaje = Math.min(
    100,
    Math.round((completados / totalEjercicios) * 100),
  );

  document.getElementById("barraProgreso").style.width = porcentaje + "%";

  document.getElementById("porcentaje").innerText = porcentaje + "% completado";
}

actualizarProgreso();
