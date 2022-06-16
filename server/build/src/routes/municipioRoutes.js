"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const municipioControllers_1 = __importDefault(require("../controllers/municipioControllers"));
class municipioRoutes {
    constructor() {
        this.routerd = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.routerd.get('/listado/:tb_Departamento_idDepartamento', municipioControllers_1.default.municipios);
        this.routerd.post('/nuevo', municipioControllers_1.default.create);
        this.routerd.get('/listado', municipioControllers_1.default.lista);
        //para obtener todos los registros
    }
}
const municipio = new municipioRoutes();
exports.default = municipio.routerd;
