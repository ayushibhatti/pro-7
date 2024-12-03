const express = require('express');

const routes = express.Router();

routes.use('/',require('./authRoute'));
routes.use('/catagory',require('./catagoryRoutes'));



module.exports = routes;