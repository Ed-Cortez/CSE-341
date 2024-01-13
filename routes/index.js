const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');
 
routes.get('/', lesson1Controller.eduardoCortez);
routes.get('/luz', lesson1Controller.luz);
routes.get('/gatito', lesson1Controller.gatito);


module.exports = routes;