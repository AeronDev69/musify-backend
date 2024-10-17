"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const searchController_1 = require("../controller/searchController");
const searchRoute = (0, express_1.Router)();
searchRoute.get('/search', searchController_1.serveSearch);
searchRoute.get('/api/search', searchController_1.search);
exports.default = searchRoute;
//# sourceMappingURL=searchRoute.js.map