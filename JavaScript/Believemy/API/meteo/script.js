let villeC = "Sommepy-Tahure";
recevoirTemp(villeC);




let btn = document.querySelector('#changer');

btn.addEventListener('click', () => {
    villeC = prompt('Quelle ville souhaitez-vous afficher ?');
    recevoirTemp(villeC);

});
function recevoirTemp(ville) {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + ville + "&appid=593934f72669afa98c34ac1c17718026&units=metric";
    let requete = new XMLHttpRequest();
    requete.open('GET', url);
    requete.responseType = 'json';
    requete.send();
    requete.onload = function () {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200) {
                let reponse = requete.response;
                let temp = reponse.main.temp;
                let ville = reponse.name;
                document.querySelector('#temperature_label').textContent = temp;
                document.querySelector('#ville').textContent = ville;
            }
            else {
                alert('Un problème est survenu, merci de revenir plus tard');
            }
        }
    }
}