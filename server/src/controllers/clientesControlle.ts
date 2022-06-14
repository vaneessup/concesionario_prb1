import {Request, Response} from 'express';
import db from '../database';

class clientesController{

     //CONSULTA PARA GUARDAR DATO
    public async create(req:Request, res: Response): Promise<void>{

            await db.query('INSERT INTO tb_clientes set ?', [req.body]);
            console.log(req.body);
            res.json({message: 'registro guardado '});
           
    }
}

export const clientController = new clientesController();
export default clientController;