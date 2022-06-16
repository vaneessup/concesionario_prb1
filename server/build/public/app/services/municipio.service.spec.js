"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const municipio_service_1 = require("./municipio.service");
describe('municipioService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(municipio_service_1.municipioService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
