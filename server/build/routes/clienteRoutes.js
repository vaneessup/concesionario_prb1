"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//enrutador
const express_1 = require("express");
const clientesController_1 = __importDefault(require("../controllers/clientesController"));
class clienteRoutes {
    constructor() {
        this.routerc = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.routerc.get('/listado', clientesController_1.default.lista);
        this.routerc.post('/', clientesController_1.default.createC);
    }
}
const client = new clienteRoutes();
exports.default = client.routerc;
