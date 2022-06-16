"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Crear servidor
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const carsRoutes_1 = __importDefault(require("./routes/carsRoutes"));
const dptoRouts_1 = __importDefault(require("./routes/dptoRouts"));
const municipioRoutes_1 = __importDefault(require("./routes/municipioRoutes"));
const clienteRoutes_1 = __importDefault(require("./routes/clienteRoutes"));
const agenteRoutes_1 = __importDefault(require("./routes/agenteRoutes"));
const concesionarioRoutes_1 = __importDefault(require("./routes/concesionarioRoutes"));
// Clase para el servidor
class Server {
    // propiedad para guardar el objeto que devuelve express
    // metodo para inicializar express
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    //directorio publico
    //app.use(express.static('public'));
    // metodo encargado de configuracion
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/cars', carsRoutes_1.default);
        this.app.use('/dpto', dptoRouts_1.default);
        this.app.use('/municipio', municipioRoutes_1.default);
        this.app.use('/cliente', clienteRoutes_1.default);
        this.app.use('/agente', agenteRoutes_1.default);
        this.app.use('/concesionario', concesionarioRoutes_1.default);
    }
    // metodo para inicializar el servidor
    start() {
        this.app.listen(this.app.get('port'));
        console.log('servicio en puerto: ', this.app.get('port'));
    }
}
// guardar el objeto app
const server = new Server();
server.start();
// new Server();
