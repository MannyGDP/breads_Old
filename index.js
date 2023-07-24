const express = require('express');
require('dotenv').config();

const { PORT }= process.env;

const app = express();

app.get('/', (req, res) => {
res.send('welcome to an Awsome App about Breads!');
});




