"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiculosModule = void 0;
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const vehiculos_routing_module_1 = require("./vehiculos-routing.module");
const flex_layout_1 = require("@angular/flex-layout");
const material_module_1 = require("../material/material.module");
const cotizar_component_1 = require("./pages/cotizar/cotizar.component");
const listado_component_1 = require("./pages/listado/listado.component");
const home_component_1 = require("./pages/home/home.component");
let VehiculosModule = class VehiculosModule {
};
VehiculosModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [
            listado_component_1.ListadoComponent,
            cotizar_component_1.CotizarComponent,
            home_component_1.HomeComponent
        ],
        imports: [
            common_1.CommonModule,
            flex_layout_1.FlexLayoutModule,
            material_module_1.MaterialModule,
            vehiculos_routing_module_1.VehiculosRoutingModule
        ]
    })
], VehiculosModule);
exports.VehiculosModule = VehiculosModule;
