class Personnage {
  constructor(pseudo, classe, hp, atk, lvl) {
    this.pseudo = pseudo;
    this.classe = classe;
    this.hp = hp;
    this.atk = atk;
    this.lvl = 1;
  }
  get informations() {
    console.log(this.pseudo + " est un " + this.classe + " avec " + this.hp + " de vie et est au niveau " + this.lvl + ".");
  }
  evoluer() {
    this.lvl++;
    console.log(this.pseudo + " passe au niveau " + this.lvl + " !");
  }
  verifSante() {
    if (this.hp <= 0) {
      this.hp = 0;
      console.log(this.pseudo + " a perdu !");
    }
    else { console.log("Tout va bien !"); }
  }
}

class Mage extends Personnage {
  constructor(pseudo) {
    super(pseudo, "Mage", 900, 120);
  }
  attaquer(perso) {
    perso.hp -= this.atk;
    console.log(this.pseudo + " attaque " + perso.pseudo + " ! Il lui inflige " + this.atk + " points de dégat !");
    this.evoluer();
    perso.verifSante();
  }
  superAttaque(perso) {
    perso.hp -= (this.atk * 5);
    console.log(this.pseudo + " se concentre et lance une super attaque sur " + perso.pseudo + " lui infligeant " + this.atk * 5 + " points de dégat !");
    this.evoluer();
    perso.verifSante();
  }
}


class Warrior extends Personnage {
  constructor(pseudo) {
    super(pseudo, "Warrior", 1000, 100);
  }
  attaquer(perso) {
    perso.hp -= this.atk;
    console.log(this.pseudo + " attaque " + perso.pseudo + " ! Il lui inflige " + this.atk + " points de dégat !");
    this.evoluer();
    perso.verifSante();
  }
  superAttaque(perso) {
    perso.hp -= (this.atk * 5);
    console.log(this.pseudo + " se concentre et lance une super attaque sur " + perso.pseudo + " lui infligeant " + this.atk * 5 + " points de dégat !");
    this.evoluer();
    perso.verifSante();
  }
}


var taka = new Mage("Taka");
taka.informations;
var yuuki = new Warrior("Yuuki");
yuuki.informations;

taka.attaquer(yuuki);
yuuki.informations;
yuuki.attaquer(taka);
taka.informations;
taka.superAttaque(yuuki);
yuuki.informations;
yuuki.superAttaque(taka);
taka.informations;
taka.superAttaque(yuuki);


