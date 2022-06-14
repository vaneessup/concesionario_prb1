import {Request, Response} from 'express';
import db from '../database';

class agentesController{

    public async lista (req:Request, res:Response){
        const agent = await db.query('SELECT * FROM tb_agentes');
        console.log(agent);
        res.json(agent[0]);
        
    }
     //CONSULTA PARA GUARDAR DATO
    public async createC(req:Request, res: Response): Promise<void>{

            await db.query('INSERT INTO tb_agentes set ?', [req.body]);
            console.log(req.body);
            res.json({message: 'registro guardado '});
           
    }
}

export const AgentesController = new agentesController();
export default AgentesController;