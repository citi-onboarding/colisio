import express from 'express';
import UserController from '@controllers/UserController'
import ProcessController from '@controllers/ProcessController';

const routes = express.Router();
const userController = new UserController();
const processController = new ProcessController();

routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);

routes.post('/process', processController.create);
routes.get('/process', processController.get);
routes.delete('/process/:id', processController.delete);
routes.put('/process/:id', processController.update);


export default routes;