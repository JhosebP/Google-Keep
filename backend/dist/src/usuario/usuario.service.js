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
exports.UsuarioService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const usuario_model_1 = require("./model/usuario.model");
const typeorm_2 = require("@nestjs/typeorm");
const bcrypt = require('bcrypt');
let UsuarioService = class UsuarioService {
    repository;
    update(id, data) {
        throw new Error('Method not implemented.');
    }
    constructor(repository) {
        this.repository = repository;
    }
    getAll() {
        return this.repository.find({
            select: ['id', 'name', 'email', 'created_at', 'updated_at']
        });
    }
    getById(id) {
        var data = this.repository.findOne({
            where: { id },
            select: ['id', 'name', 'email', 'created_at', 'updated_at']
        });
        return data;
    }
    async save(data) {
        if (data.id != undefined && data.id != null && data.id != 0) {
            const usuario = await this.repository.findOneBy({ id: data.id });
            if (!usuario)
                throw new Error(`Usuario con id ${data.id} no encontrado`);
            if (data.password) {
                data.password = await this.createHashedPassword(data.password);
            }
            await this.repository.update({ id: data.id }, data);
            return 'Se actualizo correctamente!!!';
        }
        else {
            const email = await this.repository.findOne({ where: { email: data.email } });
            if (email)
                throw new Error(`El email ${data.email} ya está registrado`);
            const hashedPassword = await this.createHashedPassword(data.password);
            data.password = hashedPassword;
            await this.repository.save(data);
            return 'Se guardo correctamente!!!';
        }
    }
    async delete(id) {
        var data = await this.findById(id);
        if (!data)
            throw new common_1.NotFoundException(`Usuario con id ${id} no encontrado`);
        await this.repository.delete({ id });
        return 'Se elimino correctamente!!!';
    }
    async findById(id) {
        const usuario = await this.repository.findOne({
            where: { id },
            select: ['id', 'name', 'email', 'created_at', 'updated_at']
        });
        if (!usuario)
            throw new common_1.NotFoundException(`Usuario con id ${id} no encontrado`);
        return usuario;
    }
    async generateJWT(data) {
        return await this.createHashedPassword(data.password);
    }
    async createHashedPassword(password) {
        var SALT_ROUNDS = 12;
        return await bcrypt.hashSync(password, SALT_ROUNDS);
    }
    async verifyPassword(plainPassword, hashedPassword) {
        return await bcrypt.compareSync(plainPassword, hashedPassword);
    }
};
exports.UsuarioService = UsuarioService;
exports.UsuarioService = UsuarioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(usuario_model_1.Usuario)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UsuarioService);
//# sourceMappingURL=usuario.service.js.map