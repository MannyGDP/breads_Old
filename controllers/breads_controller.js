const express = require('express');
const breads = express.Router();
const Bread = require('../models/bread');
const bread = require('../models/bread');

breads.get('/', (req, res) => {
    res.send(Bread);
});


bread.get('/:arrayIndex', (req, res) => {
    res.send(Bread[req.params.arrayIndex]);
});
module.exports = breads;