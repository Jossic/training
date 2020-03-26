// function somme(nb) {
//   if (nb == 1) {
//     return 1;
//   }
//   return nb + somme(nb - 1);
// }

// console.log(somme(5));

// let chien = {
//   race: "shiba inu",
//   poil: "court",
//   // aboyer: () => console.log("waf waf")
//   aboyer
// };

// chien.aboyer();

// let info = ["Jossic", "Lapierre", "Comptable", "Développeur"];

// let [prenom, nom, job1, job2] = info;

// console.log(prenom);
// console.log(nom);
// console.log(job1);
// console.log(job2);

//les MAP

// let coord = new Map([
//   ["prenom", "Jossic"],
//   ["nom", "Lapierre"],
//   ["job1", "Comptable"]
// ]);

// coord.set("job2", "Développeur");
// coord.delete("job1");

// console.log(coord);

// function add(...nb) {
//   let res = 0;
//   nb.forEach(nbr => {
//     res += nbr;
//   });
//   console.log(res);
// }

// add(5, 10, 20, 65);

// let btn = document.querySelector("button");
// let interval;
// let secondes = 5;

// // btn.onclick = start();
// btn.addEventListener("click", start);

// function start() {
//   interval = setInterval(decompte, 500);
// }

// function decompte() {
//   secondes--;
//   if (secondes == 0) {
//     stop();
//   } else {
//     document.body.innerHTML += secondes + "<br>";
//   }
// }

// function stop() {
//   clearInterval(interval);
//   document.body.innerHTML += "Stop !";
// }

// Spoiler
let btn = document.querySelector("button");
let p = document.querySelector("p");
let hidden = false;

p.style.display = "none";

btn.addEventListener("click", () => {
  if (!hidden) {
    btn.textContent = "Cacher";
    p.style.display = "contents";
    hidden = true;
  } else {
    btn.textContent = "Afficher";
    hidden = false;
    p.style.display = "none";
  }
});
