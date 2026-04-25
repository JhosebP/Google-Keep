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
exports.NoteShareService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const noteshare_model_1 = require("./model/noteshare.model");
let NoteShareService = class NoteShareService {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async getAll() {
        return await this.repository.find({
            relations: { note: true, usuario: true },
            select: {
                id: true,
                role: true,
                note: {
                    id: true,
                    title: true
                },
                usuario: {
                    id: true,
                    name: true,
                    email: true
                }
            }
        });
    }
    async getById(id) {
        return await this.findById(id);
    }
    async save(data) {
        if (data.id != undefined && data.id != null && data.id != 0) {
            const usuario = await this.findById(data.id);
            if (!usuario)
                throw new Error(`Entidad con id ${data.id} no encontrado`);
            await this.repository.update({ id: data.id }, data);
            return 'Se actualizo correctamente!!!';
        }
        else {
            const entity = await this.repository.create(data);
            await this.repository.save(entity);
            return 'Se guardo correctamente!!!';
        }
    }
    async delete(id) {
        var data = await this.findById(id);
        if (!data)
            throw new Error(`Entidad con id ${id} no encontrado`);
        await this.repository.delete({ id: id });
        return 'Se elimino correctamente!!!';
    }
    async findById(id) {
        var data = await this.repository.findOne({
            where: { id },
            relations: { note: true, usuario: true },
            select: {
                id: true,
                role: true,
                note: {
                    id: true,
                    title: true
                },
                usuario: {
                    id: true,
                    name: true
                }
            }
        });
        return data;
    }
};
exports.NoteShareService = NoteShareService;
exports.NoteShareService = NoteShareService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(noteshare_model_1.Noteshare)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], NoteShareService);
//# sourceMappingURL=noteshare.service.js.map