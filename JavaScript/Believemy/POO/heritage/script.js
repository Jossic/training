// Javascript et les prototype

// function Animal(nbPattes, poids) {
//   this.nbPattes = nbPattes;
//   this.poids = poids;
// }
// Animal.prototype.presentation = function() {
//   console.log(
//     "Cet animal possède " +
//       this.nbPattes +
//       " pattes et pèse " +
//       this.poids +
//       " g."
//   );
// };

// // Object Oiseau
// function Oiseau(nbPattes, poids, lgAiles) {
//   Animal.call(this, nbPattes, poids);
//   this.lgAiles = lgAiles;
// }
// Oiseau.prototype = Object.create(Animal.prototype);
// Oiseau.prototype.constructor = Oiseau;

// // Object Mammifere
// function Mammifere(nbPattes, poids, typePoils) {
//   Animal.call(this, nbPattes, poids);
//   this.typePoils = typePoils;
// }
// Mammifere.prototype = Object.create(Animal.prototype);
// Mammifere.prototype.constructor = Mammifere;

// var perroquet = new Oiseau(2, 500, "Grandes");
// console.log(perroquet);
// perroquet.presentation();

// Javascript et les classes
class Utilisateur {
  constructor(prenom, nom, email) {
    this.prenom = prenom;
    this.nom = nom;
    this.email = email;
  }

  get nomComplet() {
    return this.prenom + " " + this.nom;
  }

  set nomComplet(valeur) {
    [this.prenom, this.nom] = valeur.split(" ");
  }
  sePresenter() {
    console.log("Je m'appelle " + this.prenom + " " + this.nom + " !");
  }
}

var jossic = new Utilisateur("Jossic", "LAPIERRE", "jossic.lapierre@gmail.com");
jossic.sePresenter();
jossic.nomComplet = "Pauline LAPIERRE";
jossic.sePresenter();

// class Animal {
//   constructor(nbPattes, poids) {
//     this.nbPattes = nbPattes;
//     this.poids = poids;
//   }
//   sePresenter() {
//     console.log(
//       "Cet animal possède " +
//         this.nbPattes +
//         " pattes et pèse " +
//         this.poids +
//         " g."
//     );
//   }
// }

// class Poisson extends Animal {
//   constructor(nbPattes, poids, lgNageoire) {
//     super(nbPattes, poids);
//     this.lgNageoire = lgNageoire;
//   }
//   nager() {
//     console.log("Le poisson nage !");
//   }
// }
// var dauphin = new Poisson(1, 120, 50);
// console.log(dauphin);
// dauphin.sePresenter();
