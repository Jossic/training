const table = document.querySelector("#tableauLivres");


const livres = [];
afficherLivres();

for (i = 0; i <= livres.length - 1; i++) {
    const livre1 = document.createElement('tr');
    livre1.innerHTML = `
                    <td>${livres[i].nom}</td>
                    <td>${livres[i].auteur}</td>
                    <td>${livres[i].page}</td>
                    <td><button class="btn btn-warning" data-toggle="modal"
                    data-target="#modifModal"  type="button">Modifier</button></td>
                    <td><button class="btn btn-danger"type="button">Supprimer</button></td>
`;

    table.appendChild(livre1);
}



document.querySelector('#validationFormAjout').addEventListener('click', (e) => {
    e.preventDefault();
    const titre = document.querySelector('#ajoutForm #titre').value;
    const auteur = document.querySelector('#ajoutForm #auteur').value;
    const page = parseInt(document.querySelector('#ajoutForm #page').value);

    ajoutLivre(titre, auteur, page);

    document.querySelector('#ajoutForm').reset();
    $('#exampleModal').modal('hide');
}
);

function ajoutLivre(titre, auteur, page) {
    const livre = {
        nom: titre,
        auteur: auteur,
        page: page
    }
    livres.push(livre);
    afficherLivres();
}

function afficherLivres() {
    const tableauLivres = document.querySelector('#tableauLivres tbody');
    let livre = '';
    for (let i = 0; i < livres.length; i++) {
        livre += `<tr>
                    <td>${livres[i].nom}</td>
                    <td>${livres[i].auteur}</td>
                    <td>${livres[i].page}</td>
                    <td><button class="btn btn-warning" data-toggle="modal"
                    data-target="#modifModal" onClick="modifierLivre(${i})" type="button">Modifier</button></td>
                    <td><button class="btn btn-danger" onClick="supprimerLivre(${i})"type="button">Supprimer</button></td></tr>
`;
    }
    tableauLivres.innerHTML = livre;
}


document.querySelector('#validationFormModif').addEventListener('click', (e) => {
    e.preventDefault();
    const titre = document.querySelector('#modifForm #titre').value;
    const auteur = document.querySelector('#modifForm #auteur').value;
    const page = parseInt(document.querySelector('#modifForm #page').value);
    const posLivre = document.querySelector('#modifForm #ids').value;

    livres[posLivre].nom = titre;
    livres[posLivre].auteur = auteur;
    livres[posLivre].page = page;
    afficherLivres();

    document.querySelector('#modifForm').reset();
    $('#modifModal').modal('hide');
}
);

function modifierLivre(aModif) {
    document.querySelector('#modifForm #titre').value = livres[aModif].nom;
    document.querySelector('#modifForm #auteur').value = livres[aModif].auteur;
    document.querySelector('#modifForm #page').value = livres[aModif].page;
    document.querySelector('#modifForm #ids').value = aModif;


}

function supprimerLivre(aSuppr) {
    livres.splice(aSuppr, 1);
    afficherLivres();
}



