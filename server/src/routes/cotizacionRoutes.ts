//enrutador
import {Router} from 'express';
import CController from '../controllers/cotizacionController';
class cotizaciones{

   public router: Router = Router();

   constructor(){
            this.config();
   }
   config(): void{
   }
}

const ct = new cotizaciones();
export default ct.router;