import {Request, Response} from 'express';
import db from '../database';

class departamentoControllers{

    public async lista (req:Request, res:Response){
        const depto = await db.query('SELECT * FROM tb_departamento');
        console.log(depto);
        res.json(depto[0]);
        
    }

    public async create(req:Request, res: Response): Promise<void>{

        await db.query('INSERT INTO tb_departamento set ?', [req.body]);
        console.log(req.body);
        res.json({message: 'registro guardado '});
       

    }


}

export const departamentoController = new departamentoControllers();
export default departamentoController;