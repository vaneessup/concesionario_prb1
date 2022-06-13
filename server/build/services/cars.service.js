"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarsService = void 0;
// servicios
const core_1 = require("@angular/core");
//import {Observable} from 'rxjs';
let CarsService = class CarsService {
    constructor(http) {
        this.http = http;
        this.API_Car = 'http://localhost:3000';
    }
    // metodos para htpp
    getCars() {
        return this.http.get(`${this.API_Car}/vehiculos/listado`);
    }
    // metodo para obtener un unico vehiculo
    getCar(id) {
        return this.http.get(`${this.API_Car}/vehiculos/listado${id}`);
    }
    // metodo para guardar
    saveCar(car) {
        return this.http.post(`${this.API_Car}/vehiculos`, car);
    }
    // eliminar
    deleteCar(id) {
        return this.http.delete(`${this.API_Car}/vehiculos/${id}`);
    }
    // actualizar
    updateCar(id, updatedCar) {
        return this.http.put(`${this.API_Car}/vehiculos/${id}`, updatedCar);
    }
};
CarsService = __decorate([
    (0, core_1.Injectable)({ providedIn: 'root' })
], CarsService);
exports.CarsService = CarsService;
