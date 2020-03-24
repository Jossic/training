document.querySelector("#a-supprimer").remove();

let header = document.createElement("header");
let menu = document.createElement("div");
let p = document.createElement("p");

header.textContent = "Mon Header";
header.style.backgroundColor = "#e3b04b";

menu.innerHTML = "<a href='#' >Accueil</a>";
menu.style.backgroundColor = "#f14362";

p.textContent = "Mon paragraphe test";

document.body.append(header, menu, p);
