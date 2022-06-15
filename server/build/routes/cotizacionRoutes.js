"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//enrutador
const express_1 = require("express");
const cotizacionController_1 = __importDefault(require("../controllers/cotizacionController"));
class cotizacionRoutes {
    constructor() {
        this.routerc = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.routerc.get('/listado', cotizacionController_1.default.cotizador);
    }
}
const CotizacionRoutes = new cotizacionRoutes();
exports.default = CotizacionRoutes.routerc;
