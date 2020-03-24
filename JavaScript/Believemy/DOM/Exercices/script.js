// // Accéder aux éléments
// let header = document.getElementsByTagName("header");
// let logo = document.getElementById("logo");
// let container = document.getElementsByClassName("container");
// // Super propriétés
// let h1 = document.querySelector("h1");
// let p = document.querySelectorAll("p");

// console.log(header);
// console.log(logo);
// console.log(container);
// console.log(h1);
// console.log(p);

// // Modifier des élements
// let h1 = document.querySelector("h1");
// h1.textContent = "Hello World !!!";
// h1.innerHTML =
//   "<div style='font-weight : normal; color : red'>Hello World 2 !!!</div>";
// console.log(h1);

let h1 = document.querySelector("h1");
h1.append("test2");

let helloWorld = document.createElement("div");
helloWorld.textContent = "Hello !!!";
// document.body.insertBefore(helloWorld, document.querySelector(".container"));
// Bonne méthode
document.querySelector(".container").prepend(helloWorld);
document.querySelector("#a-supprimer").remove();
