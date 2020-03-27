function Animal(nbPattes, poids) {
  this.nbPattes = nbPattes;
  this.poids = poids;
}
Animal.prototype.presentation = function() {
  console.log(
    "Cet animal possède " +
      this.nbPattes +
      " pattes et pèse " +
      this.poids +
      " g."
  );
};

// Object Oiseau
function Oiseau(nbPattes, poids, lgAiles) {
  Animal.call(this, nbPattes, poids);
  this.lgAiles = lgAiles;
}
Oiseau.prototype = Object.create(Animal.prototype);
Oiseau.prototype.constructor = Oiseau;

// Object Mammifere
function Mammifere(nbPattes, poids, typePoils) {
  Animal.call(this, nbPattes, poids);
  this.typePoils = typePoils;
}
Mammifere.prototype = Object.create(Animal.prototype);
Mammifere.prototype.constructor = Mammifere;

var perroquet = new Oiseau(2, 500, "Grandes");
console.log(perroquet);
perroquet.presentation();
