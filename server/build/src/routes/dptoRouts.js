"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const departamentoControllers_1 = __importDefault(require("../controllers/departamentoControllers"));
class dptoRout {
    constructor() {
        this.routerd = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.routerd.get('/listado', departamentoControllers_1.default.lista);
        this.routerd.post('/nuevo', departamentoControllers_1.default.create);
        this.routerd.post('/nuevo', departamentoControllers_1.default.create);
    }
}
const dpto = new dptoRout();
exports.default = dpto.routerd;
