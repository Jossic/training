// Etape 1 - Sélectionner nos éléments
let input = document.querySelector("#prix");
let error = document.querySelector("small");
let formulaire = document.querySelector("#formulaire");
let btn = document.querySelector("button");
let coups = 0;
let nbChoisi;

// Etape 2 - Cacher l'erreur
error.style.display = "none";

// Etape 3 - Générer un nombre aléatoire
let nbAleatoire = Math.floor(Math.random() * 10001);

function verifier(nb) {
  let instruction = document.createElement("div");
  if (nb < nbAleatoire) {
    instruction.textContent = "#" + coups + "(" + nb + " ) C'est plus !";
    instruction.className = "instruction plus";
  } else if (nb > nbAleatoire) {
    instruction.textContent = "#" + coups + "(" + nb + " ) C'est moins !";
    instruction.className = "instruction moins";
  } else {
    instruction.textContent = "#" + coups + "(" + nb + " ) Juste prix !!!";
    instruction.className = "instruction fini";
    input.disabled = true;
  }
  document.querySelector("#instructions").prepend(instruction);
}

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener("keyup", () => {
  if (isNaN(input.value) || input.value > 10000 || input.value <= 0) {
    error.style.display = "inline";
    input.style.background = "#fc6c6c ";
    btn.style.display = "none";
  } else {
    error.style.display = "none";
    input.style.background = "white ";
    btn.style.display = "inline";
  }
});
// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener("submit", e => {
  e.preventDefault();
  if (isNaN(input.value) || input.value == "") {
    input.style.borderColor = "red";
  } else {
    coups++;
    input.style.borderColor = "silver";
    nbChoisi = input.value;
    input.value = "";
    verifier(nbChoisi);
  }
});
// Etape 6 - Créer la fonction vérifier
