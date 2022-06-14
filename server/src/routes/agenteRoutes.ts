import {Router} from 'express';
import AgenteController from '../controllers/agenteController';

class agenteRoutes{

   public routerc: Router = Router();

   constructor(){
            this.config();
   }
   config(): void{
        this.routerc.get('/listado', AgenteController.lista);
        this.routerc.post('/', AgenteController.createC);
   }
}

const agent = new agenteRoutes();
export default agent.routerc;