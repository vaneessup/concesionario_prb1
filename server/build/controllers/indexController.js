"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class Controller {
    index(req, res) {
        res.json({ Text: 'API está en /cars' });
    }
}
exports.indexController = new Controller();
