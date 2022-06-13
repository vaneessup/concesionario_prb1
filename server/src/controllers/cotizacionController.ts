import {Request, Response} from 'express';
import db from '../database';

class CotizacionCL{

    public async list (req:Request, res:Response){
        const cotizacion = await db.query('SELECT * FROM tb_cotizacion');
        console.log(cotizacion);
        res.json(cotizacion[0]);
        
    }
    
    public async create(req:Request, res: Response): Promise<void>{

            await db.query('INSERT INTO tb_cotizacion set ?', [req.body]);
            console.log(req.body);
            res.json({message: 'registro guardado '});
            //CONSULTA PARA GUARDAR DATO

    }

    public async delete(req:Request, res: Response){
        const { id } = req.params;
        await db.query('DELETE FROM tb_cotizacion WHERE id = ?', [id])
        res.json({message: 'Eliminando un registro ' + req.params.id});

    }

    public async update(req:Request, res: Response): Promise<void>{
        const { id } = req.params;
        await db.query('UPDATE tb_cotizacion set ? WHERE id = ?', [req.body, id])
        res.json({Text: 'Registro actualizado ' + req.params.id});

    }

    public async getOne(req:Request, res: Response): Promise<any>{
        const { id }= req.params;
        const cotizacion = await db.query('SELECT * FROM tb_cotizacion WHERE id = ?', [id])
        if (cotizacion.length > 0){
            return res.json(cotizacion[0]);
        }
        console.log(cotizacion);
        res.status(404).json({Text: "'No existe el registo'"});
       // res.json({Text: 'Este es el carro ' + req.params.id});

    }

}

export const CController = new CotizacionCL();
export default CController;