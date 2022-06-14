import {Router} from 'express';
import municipioControllers from '../controllers/municipioControllers';

class municipioRoutes{

   public routerd: Router = Router();

   constructor(){
            this.config();
   }
   config(): void{
        this.routerd.get('/listado/:tb_Departamento_idDepartamento',municipioControllers.municipios);
        this.routerd.post('/nuevo',municipioControllers.create);
        this.routerd.get('/listado',municipioControllers.lista);
        //para obtener todos los registros
   }
}

const municipio = new municipioRoutes();
export default municipio.routerd;