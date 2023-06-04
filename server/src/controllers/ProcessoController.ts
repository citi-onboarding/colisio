import { Citi, Crud } from "src/global";
import { Request, Response } from 'express';
import { Processo } from "@models/Processo";


export default class ProcessoController implements Crud {
    async create(req: Request, res: Response) {
        const { service, description, price } = req.body;

        const isAnyUndefined = Citi.areValuesUndefined(service, description, price)
        if (isAnyUndefined) return res.status(400).send();

        const newProcess = { service, description, price };

        const { httpStatus, message } = await Citi.insertIntoDatabase(Processo, newProcess)

        return res.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response) {
        const { httpStatus, values: process } = await Citi.getAll(Processo);
        return response.status(httpStatus).send({ process });
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        const { value: ProcessFound, message } = await Citi.findByID(Processo, id);

        if (!ProcessFound) return res.status(400).send({ message });

        const { httpStatus, messageFromDelete } = await Citi.deleteValue(Processo, ProcessFound);
        return res.status(httpStatus).send({ messageFromDelete });
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { service, description, price } = req.body;

        const isAnyUndefined = Citi.areValuesUndefined(service, description, price, id);
        if (isAnyUndefined) return res.status(400).send();

        const ProcessAtualizado = { service, description, price };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(Processo, id, ProcessAtualizado)
        return res.status(httpStatus).send({ messageFromUpdate });

    };
}