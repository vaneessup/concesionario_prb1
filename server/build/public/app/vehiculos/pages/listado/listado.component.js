"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListadoComponent = void 0;
const core_1 = require("@angular/core");
const dialog_1 = require("@angular/material/dialog");
const cotizar_component_1 = require("../cotizar/cotizar.component");
let ListadoComponent = class ListadoComponent {
    constructor(CarsService, dialog) {
        this.CarsService = CarsService;
        this.dialog = dialog;
        this.displayedColumns = ['idVehiculo', 'Marca', 'Modelo', 'Tipo', 'Precio'];
        //dataSource = new MatTableDataSource<vehiculos>(ELEMENT_DATA);
        this.clickedRows = new Set();
        this.vehic = [];
    }
    ngAfterViewInit() {
        // this.dataSource.paginator = this.paginator;
    }
    ngOnInit() {
        this.CarsService.getCars()
            .subscribe(vehic => this.vehic = vehic);
    }
    onCreate() {
        const dialogConfig = new dialog_1.MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.width = "45%";
        dialogConfig.height = "80%";
        this.dialog.open(cotizar_component_1.CotizarComponent, dialogConfig);
    }
};
ListadoComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-listado',
        templateUrl: './listado.component.html',
        styleUrls: [
            "./list.component.css"
        ]
    })
], ListadoComponent);
exports.ListadoComponent = ListadoComponent;
