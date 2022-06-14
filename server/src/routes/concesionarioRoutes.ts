//enrutador
import {Router} from 'express';
import concesionariosController from '../controllers/concesionarioController';

class concesionarioRoutes{

    public routerc: Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.routerc.get('/listado', concesionariosController.lista);
        this.routerc.post('/', concesionariosController.createC);
    }
}

const concesionario = new concesionarioRoutes();
export default concesionario.routerc;