"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutingModule = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const login_component_1 = require("./pages/login/login.component");
const registro_component_1 = require("./pages/registro/registro.component");
const listado_component_1 = require("../vehiculos/pages/listado/listado.component");
const cotizar_component_1 = require("../vehiculos/pages/cotizar/cotizar.component");
const vehiculo_component_1 = require("../vehiculos/pages/vehiculo/vehiculo.component");
const routes = [
    {
        path: '',
        //rutas hijas
        children: [
            {
                path: 'login',
                component: login_component_1.LoginComponent
            },
            {
                path: 'registro',
                component: registro_component_1.RegistroComponent
            },
            {
                path: 'cars/listado',
                component: listado_component_1.ListadoComponent
            },
            {
                path: 'cars/cotizar',
                component: cotizar_component_1.CotizarComponent
            },
            {
                path: ':id',
                component: vehiculo_component_1.VehiculoComponent
            },
            {
                path: '**',
                redirectTo: 'login'
            }
        ]
    }
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [],
        imports: [
            router_1.RouterModule.forChild(routes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], AuthRoutingModule);
exports.AuthRoutingModule = AuthRoutingModule;
