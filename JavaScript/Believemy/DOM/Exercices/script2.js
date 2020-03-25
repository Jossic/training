function somme(nb) {
  if (nb == 1) {
    return 1;
  }
  return nb + somme(nb - 1);
}

console.log(somme(5));
