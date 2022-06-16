"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const dpto_service_1 = require("./dpto.service");
describe('dptoService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(dpto_service_1.dptoService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
