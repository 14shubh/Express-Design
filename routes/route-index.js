const express = require('express');
const route = express.Router();
const routeController = require('../controller/index_controller');

route.get('/', routeController.homePage);
route.get('/contact', routeController.contactPage);
// route.get('/', routeController.homePage);

module.exports = route;