const table = document.querySelector('#tableauLibres');

const livre1 = document.createElement('tr');
livre1.innerHTML = `
                    <td>Un livre</td>
                    <td>Moi 2</td>
                    <td>2002</td>
                    <td><button class="btn btn-warning" type="button">Modifier</button></td>
                    <td><button class="btn btn-danger" type="button">Supprimer</button></td>
`;
table.appendChild(livre1);