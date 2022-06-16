"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutingModule = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const error_page_component_1 = require("./shared/error-page/error-page.component");
const routes = [
    {
        path: 'auth',
        loadChildren: () => Promise.resolve().then(() => __importStar(require('./auth/auth.module'))).then(m => m.AuthModule)
    },
    {
        path: 'cars',
        loadChildren: () => Promise.resolve().then(() => __importStar(require('./vehiculos/vehiculos.module'))).then(m => m.VehiculosModule)
    },
    {
        path: 'cars/listado',
        loadChildren: () => Promise.resolve().then(() => __importStar(require('./vehiculos/vehiculos.module'))).then(m => m.VehiculosModule)
    },
    {
        path: 'cars/cotizar',
        loadChildren: () => Promise.resolve().then(() => __importStar(require('./vehiculos/vehiculos.module'))).then(m => m.VehiculosModule)
    },
    {
        path: ':id',
        loadChildren: () => Promise.resolve().then(() => __importStar(require('./vehiculos/vehiculos.module'))).then(m => m.VehiculosModule)
    },
    {
        path: '404',
        component: error_page_component_1.ErrorPageComponent
    },
    {
        path: '**',
        //component: ErrorPageComponent
        redirectTo: 'cars/listado'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    (0, core_1.NgModule)({
        imports: [
            router_1.RouterModule.forRoot(routes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
