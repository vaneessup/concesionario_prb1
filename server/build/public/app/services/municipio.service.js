"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.municipioService = void 0;
const core_1 = require("@angular/core");
//import {Observable} from 'rxjs';
let municipioService = class municipioService {
    constructor(http) {
        this.http = http;
        this.API_mun = 'http://localhost:3000/municipio/listado';
    }
    // metodos para htpp
    getdmuni() {
        return this.http.get(`${this.API_mun}`);
    }
    // metodo para obtener un unico vehiculo
    getmun(id) {
        const ret = this.http.get(`${this.API_mun}/${id}`);
        return ret;
    }
};
municipioService = __decorate([
    (0, core_1.Injectable)({ providedIn: 'root' })
], municipioService);
exports.municipioService = municipioService;
