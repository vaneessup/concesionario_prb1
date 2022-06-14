import {Router} from 'express';
import departamentoController from '../controllers/departamentoControllers';

class dptoRout{

   public routerd: Router = Router();

   constructor(){
            this.config();
   }
   config(): void{
        this.routerd.get('/listado',departamentoController.lista);//para obtener todos los registros
   }
}

const dpto = new dptoRout();
export default dpto.routerd;