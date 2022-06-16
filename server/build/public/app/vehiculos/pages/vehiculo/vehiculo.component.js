"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiculoComponent = void 0;
const core_1 = require("@angular/core");
let VehiculoComponent = class VehiculoComponent {
    constructor(CarsService) {
        this.CarsService = CarsService;
        this.vehic = [];
    }
    ngAfterViewInit() {
        // this.dataSource.paginator = this.paginator;
    }
    ngOnInit() {
        this.CarsService.getCars()
            .subscribe(vehic => this.vehic = vehic);
    }
};
VehiculoComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-vehiculo',
        templateUrl: './vehiculo.component.html',
    })
], VehiculoComponent);
exports.VehiculoComponent = VehiculoComponent;
