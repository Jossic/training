const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({ errors }) => {
    return layout({
        content: `
        <form method="POST" enctype="multipart/form-data">
        <input placeholder="Titre" name="title">
        <input placeholder="Prix" name="price">
        <input type="file" name="image">
        <button>Envoyer</button>
        </form>
        `

    })
};