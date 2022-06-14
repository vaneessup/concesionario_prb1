"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//enrutador
const express_1 = require("express");
const concesionarioController_1 = __importDefault(require("../controllers/concesionarioController"));
class concesionarioRoutes {
    constructor() {
        this.routerc = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.routerc.get('/listado', concesionarioController_1.default.lista);
        this.routerc.post('/', concesionarioController_1.default.createC);
    }
}
const concesionario = new concesionarioRoutes();
exports.default = concesionario.routerc;
