const { Router } = require('express');
const router = Router();
const getProducts = require('../controllers/products');
const getProductById = require('../controllers/productById');


router.get('/items', (req, res) => { getProducts(req, res) });

router.get('/items/:id', (req, res) => { getProductById(req, res) });

module.exports = router;