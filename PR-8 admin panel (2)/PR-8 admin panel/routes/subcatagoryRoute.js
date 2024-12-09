const express = require('express');
const routes = express.Router();

const { subCatagory , addsubCatagory , insertsubCatagory , deletesubCatagory ,editsubCatagory , updatesubCatagory ,changeStatus } = require('../controllers/subcatagoryController');

const passport = require('passport');``

routes.get('/',subCatagory)
routes.get('/addsubcatagory',addsubCatagory)
routes.post('/insertsubcatagory',insertsubCatagory)
routes.get('/deletesubcatagory',deletesubCatagory)
routes.get('/editsubcatagory',editsubCatagory)
routes.post('/updatesubcatagory',updatesubCatagory)
routes.get('/changeStatus', changeStatus);






module.exports = routes;
