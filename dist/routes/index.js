"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authRoute_1 = __importDefault(require("./authRoute"));
const searchRoute_1 = __importDefault(require("./searchRoute"));
const routes = (0, express_1.Router)();
routes.use(authRoute_1.default);
routes.use(searchRoute_1.default);
exports.default = routes;
//# sourceMappingURL=index.js.map