const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = [];

function adivinarNumero() {
  while (true) {
    let entrada = prompt("Adivina el número secreto (entre 1 y 100):");
    let numero = parseInt(entrada);

    if (isNaN(numero) || numero < 1 || numero > 100) {
      alert("Por favor ingresa un número válido entre 1 y 100.");
      continue;
    }

    intentos.push(numero);

    if (numero === numeroSecreto) {
      alert(`¡Felicidades! Adivinaste el número secreto: ${numeroSecreto}`);
      console.log("Intentos realizados:", intentos);
      break;
    } else {
      alert("Ups, el número secreto es incorrecto. Vuelve a intentarlo.");
    }
  }
}

adivinarNumero();
