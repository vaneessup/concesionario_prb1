//enrutador
import {Router} from 'express';
import CController from '../controllers/cotizacionController';



class cotizaciones{

   public router: Router = Router();

   constructor(){
            this.config();
   }
   config(): void{
        this.router.get('/cotizacion',CController.list);//para obtener todos los registros
        this.router.get('/listado/:id', CController.getOne);//para obtener un solo registro
        this.router.post('/', CController.create);
        this.router.delete('/listado/:id', CController.delete);
        this.router.put('/listado/:id', CController.update);
   }
}

const ct = new cotizaciones();
export default ct.router;