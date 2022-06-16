"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const app_component_1 = require("./app.component");
const animations_1 = require("@angular/platform-browser/animations");
const app_routing_module_1 = require("./app-routing.module");
const error_page_component_1 = require("./shared/error-page/error-page.component");
const http_1 = require("@angular/common/http");
const vehiculo_component_1 = require("./vehiculos/pages/vehiculo/vehiculo.component");
const cars_service_1 = require("./services/cars.service");
const forms_1 = require("@angular/forms");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [
            app_component_1.AppComponent,
            error_page_component_1.ErrorPageComponent,
            //VehiculoComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            app_routing_module_1.AppRoutingModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpClientModule
        ],
        providers: [cars_service_1.CarsService],
        bootstrap: [app_component_1.AppComponent],
        entryComponents: [vehiculo_component_1.VehiculoComponent]
    })
], AppModule);
exports.AppModule = AppModule;
