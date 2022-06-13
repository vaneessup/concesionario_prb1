"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//enrutador
const express_1 = require("express");
const carsController_1 = __importDefault(require("../controllers/carsController"));
class cars {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/listado', carsController_1.default.list); //para obtener todos los registros
        this.router.get('/listado/:id', carsController_1.default.getOne); //para obtener un solo registro
        this.router.post('/', carsController_1.default.create);
        this.router.delete('/listado/:id', carsController_1.default.delete);
        this.router.put('/listado/:id', carsController_1.default.update);
    }
}
const Cars = new cars();
exports.default = Cars.router;
