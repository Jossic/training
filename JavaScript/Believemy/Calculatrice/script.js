function addition(nb1, nb2) {
  return nb1 + nb2;
}
function multiplication(nb1, nb2) {
  return nb1 * nb2;
}
function soustraction(nb1, nb2) {
  return nb1 - nb2;
}
function division(nb1, nb2) {
  if (nb2 == 0) {
    throw new Error("Impossible de diviser par 0 !");
  }
  return nb1 / nb2;
  4;
}

do {
  var choix = Number(
    prompt(
      "Que souhaitez-vous faire ?\n\n 1 - Addition\n 2 - Multiplication\n 3 - Soustraction\n 4 - Division"
    )
  );
} while (choix !== 1 && choix !== 2 && choix !== 3 && choix !== 4);

do {
  var nb1 = Number(prompt("Votre premier nombre ?"));
  var nb2 = Number(prompt("Votre second nombre ?"));
} while (isNaN(nb1) || isNaN(nb2));

try {
  var resultat;
  switch (choix) {
    case 1:
      resultat = addition(nb1, nb2);
      break;
    case 2:
      resultat = multiplication(nb1, nb2);
      break;
    case 3:
      resultat = sous4traction(nb1, nb2);
      break;
    case 4:
      resultat = division(nb1, nb2);
      break;
    default:
      throw new Error("Une erreur est survenue");
  }
  alert("Votre résultat : " + resultat);
} catch (error) {
  alert(error);
}
