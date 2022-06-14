import {Request, Response} from 'express';
import db from '../database';

class concesionariosController{

    public async lista (req:Request, res:Response){
        const concesionarios = await db.query('SELECT * FROM tb_concesionario');
        console.log(concesionarios);
        res.json(concesionarios[0]);

    }
    //CONSULTA PARA GUARDAR DATO
    public async createC(req:Request, res: Response): Promise<void>{

        await db.query('INSERT INTO tb_concesionario set ?', [req.body]);
        console.log(req.body);
        res.json({message: 'registro guardado '});

    }
}

export const ConcesionariosController = new concesionariosController();
export default ConcesionariosController;