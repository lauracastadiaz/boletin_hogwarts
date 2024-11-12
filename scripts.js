let arrayCalificaciones = [7, 4, 8, 5, 9];

function mostrarNotas() {
  let elementoCalificaciones = document.getElementById("calificaciones");

  for (let nota of arrayCalificaciones) {
    let itemLista = document.createElement("li");
    itemLista.innerText = nota;
    elementoCalificaciones.appendChild(itemLista);
  }
}

function calcularMedia() {
  let suma = 0;
  for (i = 0; i < arrayCalificaciones.length; i++) {
    suma += arrayCalificaciones[i];
  }

  let media = (suma / 5);
  document.getElementById("media").textContent = media;
}

function notaMasAlta() {
  let notaMasAlta = 0;
  let i = 0;

  while (i < arrayCalificaciones.length) {
    if (arrayCalificaciones[i] > notaMasAlta) {
      notaMasAlta = arrayCalificaciones[i];
    }
    i++;
  }
  document.getElementById("notaMasAlta").textContent = notaMasAlta;
}

function haySuspenso() {
  let suspenso = "No";
  let i = 0;

  do {
    if (arrayCalificaciones[i] < 5) {
      suspenso = "Sí";
      break;
    }
    i++;
  } while (i < 5);

  document.getElementById("haySuspenso").textContent = suspenso;
}



