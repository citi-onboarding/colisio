import { Citi, Crud } from "src/global";
import { Request, Response } from 'express';
import { Process } from "@models/Process";


export default class ProcessController implements Crud {
    async create(req: Request, res: Response) {
        const { service, description } = req.body;

        const isAnyUndefined = Citi.areValuesUndefined(service, description)
        if (isAnyUndefined) return res.status(400).send();

        const newProcess = { service, description };

        const { httpStatus, message } = await Citi.insertIntoDatabase(Process, newProcess)

        return res.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response) {
        const { httpStatus, values: process } = await Citi.getAll(Process);
        return response.status(httpStatus).send({ process });
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        const { value: processFound, message } = await Citi.findByID(Process, id);

        if (!processFound) return res.status(400).send({ message });

        const { httpStatus, messageFromDelete } = await Citi.deleteValue(Process, processFound);
        return res.status(httpStatus).send({ messageFromDelete });
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { service, description } = req.body;

        const isAnyUndefined = Citi.areValuesUndefined(service, description, id);
        if (isAnyUndefined) return res.status(400).send();

        const processAtualizado = { service, description };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(Process, id, processAtualizado)
        return res.status(httpStatus).send({ messageFromUpdate });

    };
}