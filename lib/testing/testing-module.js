"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const optional = require("optional");
const core_1 = require("@nestjs/core");
const microservices_package_not_found_exception_1 = require("@nestjs/core/errors/exceptions/microservices-package-not-found.exception");
const { NestMicroservice } = optional('@nestjs/microservices/nest-microservice') || {};
class TestingModule extends core_1.NestApplicationContext {
    constructor(container, scope, contextModule) {
        super(container, scope, contextModule);
    }
    createNestApplication(expressInstance = express()) {
        return new core_1.NestApplication(this.container, expressInstance);
    }
    createNestMicroservice(config) {
        if (!NestMicroservice) {
            throw new microservices_package_not_found_exception_1.MicroservicesPackageNotFoundException();
        }
        return new NestMicroservice(this.container, config);
    }
}
exports.TestingModule = TestingModule;
