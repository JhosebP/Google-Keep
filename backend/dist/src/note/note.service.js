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
exports.NoteService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const note_model_1 = require("./model/note.model");
let NoteService = class NoteService {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    getAll() {
        return this.repository.find();
    }
    getById(id) {
        var data = this.repository.findOne({
            where: { id }
        });
        return data;
    }
    async save(data) {
        if (data.id != undefined && data.id != null && data.id != 0) {
            const usuario = await this.repository.findOneBy({ id: data.id });
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
        const entity = await this.repository.findOne({
            where: { id }
        });
        if (!entity)
            throw new Error(`Entidad con id ${id} no encontrado`);
        return entity;
    }
};
exports.NoteService = NoteService;
exports.NoteService = NoteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(note_model_1.Note)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], NoteService);
//# sourceMappingURL=note.service.js.map