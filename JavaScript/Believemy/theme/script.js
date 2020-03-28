let btn = document.querySelector("#mode");
let span = document.querySelector("span");
let body = document.querySelector('body');

if (localStorage.getItem('theme')) {
  if (localStorage.getItem('theme') == 'sombre') {
    modeSombre();
  }
}

btn.addEventListener('click', () => {
  if (body.classList.contains('dark')) {
    body.className = "";
    span.textContent = "Theme sombre";
    localStorage.setItem('theme', 'clair');
  }
  else {
    modeSombre();
  }
});


function modeSombre() {
  body.className = "dark";
  span.textContent = "Theme clair";
  localStorage.setItem('theme', 'sombre');
}