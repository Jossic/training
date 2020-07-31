const readline = require('readline-sync');

let nom = readline.question('Quel est votre nom ?');
let prenom = readline.question('Quel est votre prenom ?');
let age = readline.question('Quel est votre age ?');

console.log("----------------------------");
console.log("---------bienvenue----------");
console.log("----------------------------");

console.log(`
Votre nom est : ${nom}
Votre prenom est : ${prenom}
Votre age est : ${age}
`)