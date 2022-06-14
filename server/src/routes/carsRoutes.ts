//enrutador
import {Router} from 'express';
import CarsController from '../controllers/carsController';

class cars{

   public router: Router = Router();

   constructor(){
            this.config();
   }
   config(): void{
        this.router.get('/listado',CarsController.list);//para obtener todos los registros
        this.router.get('/listado/:idVehiculo', CarsController.getOne);//para obtener un solo registro
        this.router.post('/', CarsController.create);
        this.router.delete('/listado/:idVehiculo', CarsController.delete);
        this.router.put('/listado/:idVehiculo', CarsController.update);
   }
}

const Cars = new cars();
export default Cars.router;