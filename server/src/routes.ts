import express from 'express';
import UserController from '@controllers/UserController'
import CarouselController from '@controllers/CarouselController';

const routes = express.Router();
const userController = new UserController();
const carouselController = new CarouselController();

routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);

routes.post('/user', carouselController.create);
routes.get('/user', carouselController.get);
routes.delete('/user/:id', carouselController.delete);
routes.put('/user/:id', carouselController.update);


export default routes;