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
exports.munController = void 0;
const database_1 = __importDefault(require("../database"));
class municipioControllers {
    municipios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { tb_Departamento_idDepartamento } = req.params;
            const municipio = yield database_1.default.query('SELECT * FROM tb_municipio WHERE tb_Departamento_idDepartamento = ?', [tb_Departamento_idDepartamento]);
            console.log(municipio);
            if (municipio.length > 0) {
                return res.json(municipio[0]);
            }
            console.log(municipio);
            res.status(404).json({ Text: "'No existe el registo'" });
        });
    }
}
exports.munController = new municipioControllers();
exports.default = exports.munController;
