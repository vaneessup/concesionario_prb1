"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const agenteController_1 = __importDefault(require("../controllers/agenteController"));
class agenteRoutes {
    constructor() {
        this.routerc = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.routerc.get('/listado', agenteController_1.default.lista);
        this.routerc.post('/', agenteController_1.default.createC);
    }
}
const agent = new agenteRoutes();
exports.default = agent.routerc;
