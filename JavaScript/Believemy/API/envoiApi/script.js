const url = 'https://lesoublisdelinfo.com/api.php';

let requete = new XMLHttpRequest();
requete.open('POST', url);
// Pour du POST
requete.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
requete.responseType = 'json';
requete.send('prenom=Jossic');
requete.onload = function () {
  if (requete.readyState === XMLHttpRequest.DONE) {
    if (requete.status === 200) {
      let reponse = requete.response;
      console.log(reponse);
    }
    else {
      alert('un pb est intervenu');
    }
  }
}