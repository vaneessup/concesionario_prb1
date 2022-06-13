"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const cars_service_1 = require("./cars.service");
describe('CarsService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(cars_service_1.CarsService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
