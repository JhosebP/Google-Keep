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
exports.AttachmentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const attachment_model_1 = require("./model/attachment.model");
let AttachmentService = class AttachmentService {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    getAll() {
        return this.repository.find();
    }
    async save(data, entityId) {
        if (!data)
            throw new common_1.BadRequestException('No se recibio ningun archivo');
        if (!data.buffer || data.buffer.length === 0)
            throw new common_1.BadRequestException('El archivo no contiene buffer. Verifica memoryStorage en el interceptor');
        var attachment = new attachment_model_1.Attachment();
        attachment.filename = data.originalname;
        attachment.filetype = data.mimetype;
        attachment.filesize = data.size;
        attachment.filedata = data.buffer;
        attachment.note = { id: entityId };
        return await this.repository.save(attachment);
    }
};
exports.AttachmentService = AttachmentService;
exports.AttachmentService = AttachmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(attachment_model_1.Attachment)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], AttachmentService);
//# sourceMappingURL=attachment.service.js.map