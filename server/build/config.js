"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
console.log(process.env.NICKNAME);
exports.default = {
    port: 3000
};
