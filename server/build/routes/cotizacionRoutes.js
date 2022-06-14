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
    }
}
const ct = new cotizaciones();
exports.default = ct.router;
