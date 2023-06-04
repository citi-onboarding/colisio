import express from 'express';
import ProcessoController from '@controllers/ProcessoController';

const routes = express.Router();
const processoController = new ProcessoController();

routes.post('/processo', processoController.create);
routes.get('/processo', processoController.get);
routes.delete('/processo/:id', processoController.delete);
routes.put('/processo/:id', processoController.update);


export default routes;