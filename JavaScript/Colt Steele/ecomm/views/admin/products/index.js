const layout = require('../layout');

module.exports = ({ products }) => {
    const renderedProducts = products
        .map(product => {
            return `
      <tr>
        <td>${product.title}</td>
        <td>${product.price}</td>
        <td>
          <a href="">
            <button class="button is-link">
              Modifier
            </button>
          </a>
        </td>
        <td>
          <button class="button is-danger">Supprimer</button>
        </td>
      </tr>
    `;
        })
        .join('');

    return layout({
        content: `
      <div class="control">
        <h1 class="subtitle">Products</h1>  
        <a href="/admin/products/new" class="button is-primary">Ajouter un produit</a>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          ${renderedProducts}
        </tbody>
      </table>
    `
    });
};
