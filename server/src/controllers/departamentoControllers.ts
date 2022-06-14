import {Request, Response} from 'express';
import db from '../database';

class departamentoControllers{

    public async lista (req:Request, res:Response){
        const depto = await db.query('SELECT * FROM tb_departamento');
        console.log(depto);
        res.json(depto[0]);
        
    }
}

export const departamentoController = new departamentoControllers();
export default departamentoController;