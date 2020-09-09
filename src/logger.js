"use strict";
exports.__esModule = true;
exports.logger = void 0;
var winston = require("winston");
var isProd = process.env.NODE_ENV === "production";
var format = winston.format.combine(winston.format.errors({ stack: true }), winston.format.colorize(), winston.format.align(), winston.format.simple());
var transportConsole = new winston.transports.Console({ format: format });
exports.logger = winston.createLogger({
    level: isProd ? "info" : "debug",
    transports: [transportConsole]
});
