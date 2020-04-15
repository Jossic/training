const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({ errors }) => {
    return layout({
        content: `
      <div class="columns is-centered">
        <div class="column is-half">
          <h1 class="subtitle">Créer un produit</h1>

          <form method="POST" enctype="multipart/form-data">
            <div class="field">
              <label class="label">Nom du produit</label>
              <input class="input" placeholder="Nom" name="title">
              <p class="help is-danger">${getError(errors, 'title')}</p>
            </div>
            
            <div class="field">
              <label class="label">Prix</label>
              <input class="input" placeholder="Prix" name="price">
              <p class="help is-danger">${getError(errors, 'price')}</p>
            </div>
            
            <div class="field">
              <label class="label">Image</label>            
              <input type="file" name="image" />
            </div>
            <br />
            <button class="button is-primary">Créer mon produit</button>
          </form>
        </div>
      </div>
    `
    });
};
