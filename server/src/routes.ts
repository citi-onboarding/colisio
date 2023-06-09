import express from 'express';
import UserController from '@controllers/UserController'
import { SendMail } from '@controllers/MailController';
import CarouselController from '@controllers/CarouselController';
import ProcessController from '@controllers/ProcessController';


const routes = express.Router();
const carouselController = new CarouselController();
const processController = new ProcessController();


routes.post('/process', processController.create);
routes.get('/process', processController.get);
routes.delete('/process/:id', processController.delete);
routes.put('/process/:id', processController.update);

routes.post('/carousel', carouselController.create);
routes.get('/carousel', carouselController.get);
routes.delete('/carousel/:id', carouselController.delete);
routes.put('/carousel/:id', carouselController.update);


routes.post('/email', SendMail);


export default routes;