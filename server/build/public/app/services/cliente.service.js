"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clienteService = void 0;
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http"); // interfaz para hacer peticiones http
//import {Observable} from 'rxjs';
let clienteService = class clienteService {
    constructor(http) {
        this.http = http;
        this.API_client = 'http://localhost:3000/cliente';
    }
    // metodos para htpp
    getclientes() {
        return this.http.get(`${this.API_client}/listado`);
    }
    // metodo para obtener un unico vehiculo
    getcliente(id) {
        return this.http.get(`${this.API_client}/listado${id}`);
    }
    // metodo para guardar//insert
    saveCliente(datos) {
        let headers = new http_1.HttpHeaders().set('Content-type', 'application/json;charset=UTF-8');
        return this.http.post(`${this.API_client}`, datos, { headers });
    }
};
clienteService = __decorate([
    (0, core_1.Injectable)({ providedIn: 'root' })
], clienteService);
exports.clienteService = clienteService;
