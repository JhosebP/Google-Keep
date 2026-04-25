"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteShareController = void 0;
const common_1 = require("@nestjs/common");
const noteshare_service_1 = require("./noteshare.service");
const noteshare_dto_1 = require("./dto/noteshare.dto");
let NoteShareController = class NoteShareController {
    service;
    constructor(service) {
        this.service = service;
    }
    async getAll() {
        return await this.service.getAll();
    }
    async get(id) {
        return await this.service.getById(id);
    }
    async save(data) {
        return await this.service.save(data);
    }
    async delete(id) {
        return await this.service.delete(id);
    }
};
exports.NoteShareController = NoteShareController;
__decorate([
    (0, common_1.Post)('getall'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NoteShareController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)('getbyid/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NoteShareController.prototype, "get", null);
__decorate([
    (0, common_1.Post)('save'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [noteshare_dto_1.NoteshareDto]),
    __metadata("design:returntype", Promise)
], NoteShareController.prototype, "save", null);
__decorate([
    (0, common_1.Post)('deletebyid/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NoteShareController.prototype, "delete", null);
exports.NoteShareController = NoteShareController = __decorate([
    (0, common_1.Controller)("notesharecontroller"),
    __metadata("design:paramtypes", [noteshare_service_1.NoteShareService])
], NoteShareController);
//# sourceMappingURL=noteshare.controller.js.map