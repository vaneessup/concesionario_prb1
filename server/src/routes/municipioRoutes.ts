import {Router} from 'express';
import municipioControllers from '../controllers/municipioControllers';

class municipioRoutes{

   public routerd: Router = Router();

   constructor(){
            this.config();
   }
   config(): void{
        this.routerd.get('/listado/:tb_Departamento_idDepartamento',municipioControllers.municipios);//para obtener todos los registros
   }
}

const municipio = new municipioRoutes();
export default municipio.routerd;