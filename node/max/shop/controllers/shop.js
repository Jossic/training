const Product = require('../models/product');
const Cart = require('../models/cart');


exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'Products list',
            path: '/products',
        });
    });
};

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId
    Product.findById(prodId, product => {
        res.render('shop/product-detail', {
            product,
            pageTitle: product.title,
            path: '/products',
        }
        );
    });

};



exports.getOrders = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/orders', {
            pageTitle: 'Orders',
            path: '/orders',
        });
    });
};

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
        });
    });
};

exports.getCart = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/cart', {
            pageTitle: 'Cart',
            path: '/cart',
        });
    });
};

exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, (product) => {
        Cart.addProduct(prodId, product.price);
    }
    )
    res.redirect('/cart');
};

exports.getCheckout = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/checkout', {
            pageTitle: 'Checkout',
            path: '/checkout',
        });
    });
};

