"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarsController = void 0;
const database_1 = __importDefault(require("../database"));
class carsController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const carros = yield database_1.default.query('SELECT * FROM tb_vehiculo');
            console.log(carros);
            res.json(carros[0]);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO tb_vehiculo set ?', [req.body]);
            console.log(req.body);
            res.json({ message: 'registro guardado ' });
            //CONSULTA PARA GUARDAR DATO
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM tb_vehiculo WHERE id = ?', [id]);
            res.json({ message: 'Eliminando un registro ' + req.params.id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE tb_vehiculo set ? WHERE id = ?', [req.body, id]);
            res.json({ Text: 'Registro actualizado ' + req.params.id });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const cars = yield database_1.default.query('SELECT * FROM tb_vehiculo WHERE id = ?', [id]);
            if (cars.length > 0) {
                return res.json(cars[0]);
            }
            console.log(cars);
            res.status(404).json({ Text: "'No existe el registo'" });
            // res.json({Text: 'Este es el carro ' + req.params.id});
        });
    }
}
exports.CarsController = new carsController();
exports.default = exports.CarsController;
