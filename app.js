// 1. Referencias a los elementos del HTML
let input = document.getElementById("intento");
let boton = document.getElementById("botonAdivinar");
let resultado = document.getElementById("resultado");
let contadorTexto = document.getElementById("contador");
let botonReiniciar = document.getElementById("botonReiniciar");

// 2. Variables de estado del juego
let numeroSecreto;
let intentos;
const MAX_INTENTOS = 10;

// 3. Función que arranca (o reinicia) el juego
function iniciarJuego() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  intentos = 0;

  resultado.textContent = "";
  contadorTexto.textContent = "Intentos: 0 / " + MAX_INTENTOS;

  input.disabled = false;
  boton.disabled = false;
  input.value = "";

  botonReiniciar.style.display = "none";
}

// 4. Escuchamos el clic en el botón de adivinar
boton.addEventListener("click", function() {
  let intento = Number(input.value);

  intentos = intentos + 1;
  contadorTexto.textContent = "Intentos: " + intentos + " / " + MAX_INTENTOS;

  if (intento === numeroSecreto) {
    resultado.textContent = "¡Felicidades! Adivinaste el número " + numeroSecreto + " en " + intentos + " intentos";
    terminarJuego();
  } else if (intentos >= MAX_INTENTOS) {
    resultado.textContent = "Se acabaron tus intentos. El número secreto era " + numeroSecreto;
    terminarJuego();
  } else if (intento > numeroSecreto) {
    resultado.textContent = "El número secreto es MENOR que " + intento;
  } else {
    resultado.textContent = "El número secreto es MAYOR que " + intento;
  }
});

// 5. Función para terminar el juego
function terminarJuego() {
  boton.disabled = true;
  input.disabled = true;
  botonReiniciar.style.display = "inline-block";
}

// 6. Escuchamos el clic en "Jugar de nuevo"
botonReiniciar.addEventListener("click", iniciarJuego);

// 7. Arrancamos el juego por primera vez
iniciarJuego();