"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const direccion_service_1 = require("./direccion.service");
describe('direService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(direccion_service_1.direService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
