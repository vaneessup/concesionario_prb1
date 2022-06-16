"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CotizarComponent = void 0;
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
let CotizarComponent = class CotizarComponent {
    constructor(formb, dptoService, dial, municipioService, router, activatedRoute, carsService, clienteService, snackBar) {
        this.formb = formb;
        this.dptoService = dptoService;
        this.dial = dial;
        this.municipioService = municipioService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.carsService = carsService;
        this.clienteService = clienteService;
        this.snackBar = snackBar;
        this.departamentos = [];
        this.municipios = [];
        this.vehiculos = [];
        this.formulario = this.formb.group({
            Nombre: [''],
            Apellido: [''],
            Telefono: [''],
            Correo: [''],
            Edad: [''],
            Genero: [''],
            tb_departamento_idDepartamento: [''],
            tb_municipio_idMunicipio: [''],
            tb_vehiculo_idVehiculo: [''],
        });
    }
    ngOnInit() {
        this.activatedRoute.params
            .pipe((0, rxjs_1.switchMap)(({ id }) => this.municipioService.getmun(id)));
        this.dptoService.getdptos()
            .subscribe(departamentos => this.departamentos = departamentos);
        this.carsService.getCars()
            .subscribe(tb_vehiculo_idVehiculo => this.vehiculos = tb_vehiculo_idVehiculo);
    }
    onChange(value) {
        this.municipioService.getmun(value)
            .subscribe(municipios => {
            console.log(municipios);
            this.municipios = municipios;
        });
    }
    Salir() {
        this.dial.closeAll();
        this.router.navigate(['/cars']);
    }
    save(clien) {
        this.clienteService.saveCliente(this.formulario.value).subscribe(result => {
            console.log(result);
        }, error => {
            console.log(error);
        });
    }
    //guardar
    cotizar() {
        console.log(this.formulario.value);
        console.log("hola");
        this.save(this.formulario.value);
        this.formulario.reset();
    }
    openSnackBar(message, action) {
        this.snackBar.open(message, action);
    }
};
CotizarComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-cotizar',
        templateUrl: './cotizar.component.html',
        styleUrls: [
            "./cotizar.component.css"
        ]
    })
], CotizarComponent);
exports.CotizarComponent = CotizarComponent;
