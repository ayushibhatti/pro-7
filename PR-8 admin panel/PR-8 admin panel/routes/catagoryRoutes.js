const express = require('express');

const routes = express.Router();

const { addCatagory , viewCatagory } = require('../controllers/catagoryController');

routes.get('/addcatagory', addCatagory)
routes.get('/viewcatagory',viewCatagory)



module.exports = routes;
