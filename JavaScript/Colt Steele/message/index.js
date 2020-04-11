document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    const input = document.querySelector('#message-input');
    const encrypted = btoa(input.value);

    const linkinput = document.querySelector('#link-input');
    linkinput.value = `${window.location}#encrypted`;
    linkinput.select();
});