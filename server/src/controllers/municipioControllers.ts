import {Request, Response} from 'express';
import db from '../database';

class municipioControllers{

    public async municipios (req:Request, res:Response){
        const { tb_Departamento_idDepartamento } = req.params;
        const municipio = await db.query('SELECT * FROM tb_municipio WHERE tb_Departamento_idDepartamento = ?',[tb_Departamento_idDepartamento]);
        console.log(municipio);
        if (municipio.length > 0){
            return res.json(municipio[0]);
        }
        console.log(municipio);
        res.status(404).json({Text: "'No existe el registo'"});
        
    }

    public async create(req:Request, res: Response): Promise<void>{

        await db.query('INSERT INTO tb_municipio set ?', [req.body]);
        console.log(req.body);
        res.json({message: 'registro guardado '});
       

    }

    //ver todos
    public async lista (req:Request, res:Response){
        const depto = await db.query('SELECT * FROM tb_municipio');
        console.log(depto);
        res.json(depto[0]);
        
    }
}

export const munController = new municipioControllers();
export default munController;