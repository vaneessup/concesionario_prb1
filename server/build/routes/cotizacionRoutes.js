"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//enrutador
const express_1 = require("express");
class cotizaciones {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        /* this.router.get('/cotizacion',CController.list);//para obtener todos los registros
         this.router.get('/listado/:id', CController.getOne);//para obtener un solo registro
         this.router.post('/', CController.create);
         this.router.delete('/listado/:id', CController.delete);
         this.router.put('/listado/:id', CController.update);*/
    }
}
const ct = new cotizaciones();
exports.default = ct.router;
