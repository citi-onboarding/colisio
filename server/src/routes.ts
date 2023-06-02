import express from 'express';
import UserController from '@controllers/UserController'
import ProcessController from '@controllers/ProcessController';
import ServiceController from '@controllers/ServiceController';

const routes = express.Router();
const userController = new UserController();
const processController = new ProcessController();
const serviceController = new ServiceController();

routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);

routes.post('/process', processController.create);
routes.get('/process', processController.get);
routes.delete('/process/:id', processController.delete);
routes.put('/process/:id', processController.update);

routes.post('/service', serviceController.create);
routes.get('/service', serviceController.get);
routes.delete('/service/:id', serviceController.delete);
routes.put('/service/:id', serviceController.update);

export default routes;