import express from 'express';
import ProcessController from '@controllers/ProcessController';

const routes = express.Router();
const processController = new ProcessController();

routes.post('/process', processController.create);
routes.get('/process', processController.get);
routes.delete('/process/:id', processController.delete);
routes.put('/process/:id', processController.update);


export default routes;