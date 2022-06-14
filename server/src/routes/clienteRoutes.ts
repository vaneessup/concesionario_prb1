//enrutador
import {Router} from 'express';
import clientesController from '../controllers/clientesController';

class clienteRoutes{

   public routerc: Router = Router();

   constructor(){
            this.config();
   }
   config(): void{
        this.routerc.get('/listado', clientesController.lista);
        this.routerc.post('/', clientesController.createC);
   }
}

const client = new clienteRoutes();
export default client.routerc;