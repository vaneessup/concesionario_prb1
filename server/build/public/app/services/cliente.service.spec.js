"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const cliente_service_1 = require("./cliente.service");
describe('clienteService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(cliente_service_1.clienteService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
