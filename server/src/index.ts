// Crear servidor
import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import carsRoutes from './routes/carsRoutes';
import dptoRout from './routes/dptoRouts';
import municipioRoutes from './routes/municipioRoutes';
import clienteRoutes from './routes/clienteRoutes';


// Clase para el servidor
class Server {

    public app : Application;
    // propiedad para guardar el objeto que devuelve express

    // metodo para inicializar express
    constructor() {
        this.app = express();
        this.config();
        this.routes();

    }

    // metodo encargado de configuracion
    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));

    }

    routes(): void {
        this.app.use(indexRoutes);
        this.app.use('/cars', carsRoutes,);
        this.app.use('/dpto', dptoRout);
        this.app.use('/municipio', municipioRoutes);
        this.app.use('/cliente', clienteRoutes);
    }

    // metodo para inicializar el servidor
    start(): void {
        this.app.listen(this.app.get('port'));
        console.log('servicio en puerto: ', this.app.get('port'));
    }
}

// guardar el objeto app
const server = new Server();
server.start();
// new Server();
