const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.use('/', require('./swagger'));

routes.get('/', (req, res) => {
    //#swagger.tags=['Hello World']
    res.send('Hello World');
});
routes.use('/contacts', require('./contacts'));
// routes.get('/', lesson1Controller.eduardoCortez);


routes.get('/luz', lesson1Controller.luz);
routes.get('/gatito', lesson1Controller.gatito);





module.exports = routes;