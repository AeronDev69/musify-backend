"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controller/authController");
const authRoute = (0, express_1.Router)();
authRoute.get('/auth/google', authController_1.auth);
exports.default = authRoute;
//# sourceMappingURL=authRoute.js.map