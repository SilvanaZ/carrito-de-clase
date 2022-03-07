const express = require('express');
const router = express.Router();

const { show, add, remove } = require('../controllers/cartController');

// api/cart
router
    .get('/show', show)
    .post('/:id', add)
    .delete('/item/:id', removeItem)
    .delete('/:id', remove)
    .delete('/')

module.exports = router;