"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dptoService = void 0;
const core_1 = require("@angular/core");
let dptoService = class dptoService {
    constructor(http) {
        this.http = http;
        this.API_dpto = 'http://localhost:3000/dpto/listado';
    }
    // metodos para htpp
    getdptos() {
        return this.http.get(`${this.API_dpto}`);
    }
    // metodo para obtener un unico vehiculo
    getdpto(id) {
        return this.http.get(`${this.API_dpto}/listado${id}`);
    }
};
dptoService = __decorate([
    (0, core_1.Injectable)({ providedIn: 'root' })
], dptoService);
exports.dptoService = dptoService;
