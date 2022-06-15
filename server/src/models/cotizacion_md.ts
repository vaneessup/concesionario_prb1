import { clientes } from './clientesmd';
import { CarsL } from './cars';
import { municipiomd } from './municipio';
import { agentemd } from './agente_md';
// definir objetos
export interface cotizacion { // definir campos
    idCotizacion?: number;
    cliente: clientes;
    cars: CarsL;
    municipios: municipiomd;
    agente: agentemd

}