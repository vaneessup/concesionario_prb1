import {Request, Response} from 'express';


class Controller{

    public index (req:Request, res:Response){

        res.json({Text: 'API está en /cars'});

    }
    
}

export const indexController = new Controller();