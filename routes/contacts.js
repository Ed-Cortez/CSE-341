const express = require('express');
const routes = require('express').Router();
const contactsController = require('../controllers/contacts');


routes.get('/', contactsController.getAll);
routes.get('/:id', contactsController.getSingle);

routes.post('/', contactsController.createUser);
routes.put('/:id', contactsController.updateUser);
routes.delete('/:id', contactsController.deleteUser);


module.exports = routes;
