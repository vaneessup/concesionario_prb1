"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiculosRoutingModule = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const listado_component_1 = require("./pages/listado/listado.component");
const home_component_1 = require("./pages/home/home.component");
const cotizar_component_1 = require("./pages/cotizar/cotizar.component");
const vehiculo_component_1 = require("./pages/vehiculo/vehiculo.component");
const routs = [
    {
        path: '',
        component: home_component_1.HomeComponent,
        children: [
            { path: 'listado', component: listado_component_1.ListadoComponent },
            { path: 'cliente', component: cotizar_component_1.CotizarComponent },
            { path: ':idVehiculo', component: vehiculo_component_1.VehiculoComponent },
            { path: '**', redirectTo: 'listado' },
        ]
    }
];
let VehiculosRoutingModule = class VehiculosRoutingModule {
};
VehiculosRoutingModule = __decorate([
    (0, core_1.NgModule)({
        imports: [
            router_1.RouterModule.forChild(routs)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], VehiculosRoutingModule);
exports.VehiculosRoutingModule = VehiculosRoutingModule;
