"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const direccionController_1 = __importDefault(require("../controllers/direccionController"));
class dirRoutes {
    constructor() {
        this.routerd = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.routerd.get('/listado', direccionController_1.default.lista);
        this.routerd.get('/', direccionController_1.default.createC);
    }
}
const dire = new dirRoutes();
exports.default = dire.routerd;
