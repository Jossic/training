// function abracadabra() {
//   let prenom = prompt("Quel est votre prénom");
//   let nom = prompt("Quel est votre nom ?");
//   let age = prompt("Quel est votre age ?");

//   alert("Bonjour " + prenom + " " + nom + " Tu as " + age + " ans");
// }

// abracadabra();

let poids = prompt("Quel est ton poids ?");
let taille = prompt("Quelle est ta taille ?");

function calculerIMC(poids, taille) {
  alert("Ton IMC est de " + poids / (taille * taille));
}
calculerIMC(poids, taille);
