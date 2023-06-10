import { Request, Response } from 'express';
import { Carousel } from '@models/Carousel';
import { Citi, Crud } from '../global'

export default class CarouselController implements Crud {

    async create(request: Request, response: Response){
        const {title, text, image} = request.body;
       

        const isAnyUndefined = Citi.areValuesUndefined(title, text, image);
        if(isAnyUndefined) return response.status(400).send();

        const newCarousel = { title, text, image };
        const {httpStatus, message} = await Citi.insertIntoDatabase(Carousel, newCarousel);

        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response){
        const {httpStatus, values: carousels} = await Citi.getAll(Carousel);
        return response.status(httpStatus).send({  carousels });
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const {value: carouselFound, message } = await Citi.findByID(Carousel, id); 
           
        if(!carouselFound) return response.status(400).send({ message });

        const {httpStatus, messageFromDelete } = await Citi.deleteValue(Carousel, carouselFound);
        return response.status(httpStatus).send({ messageFromDelete });
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const {title, text, image } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(title, text, image, id);
        if(isAnyUndefined) return response.status(400).send();

        const carouselWithUpdatedValues = { title, text, image };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(Carousel, id, carouselWithUpdatedValues);
        return response.status(httpStatus).send({ messageFromUpdate });
    }

    
}