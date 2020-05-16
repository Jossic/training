const Product = require('../models/product');


exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'Products list',
            path: '/products',
        });
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

exports.getCheckout = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/checkout', {
            pageTitle: 'Checkout',
            path: '/checkout',
        });
    });
};

