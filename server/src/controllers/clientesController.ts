import {Request, Response} from 'express';
import db from '../database';

class clientesController{

    public async lista (req:Request, res:Response){
        const clientes = await db.query('SELECT * FROM tb_clientes');
        console.log(clientes);
        res.json(clientes[0]);
        
    }
     //CONSULTA PARA GUARDAR DATO
    public async createC(req:Request, res: Response): Promise<void>{

            await db.query('INSERT INTO tb_clientes set ?', [req.body]);
            console.log(req.body);
            res.json({message: 'registro guardado '});
           
    }
}

export const ClientesController = new clientesController();
export default ClientesController;