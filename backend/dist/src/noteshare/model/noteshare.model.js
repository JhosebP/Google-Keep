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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Noteshare = void 0;
const note_model_1 = require("../../note/model/note.model");
const usuario_model_1 = require("../../usuario/model/usuario.model");
const typeorm_1 = require("typeorm");
let Noteshare = class Noteshare {
    id;
    role;
    note;
    usuario;
    created_at;
    updated_at;
};
exports.Noteshare = Noteshare;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'noteshare_id' }),
    __metadata("design:type", Number)
], Noteshare.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Noteshare.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => note_model_1.Note, data => data.id),
    (0, typeorm_1.JoinColumn)({ name: 'note_id' }),
    __metadata("design:type", note_model_1.Note)
], Noteshare.prototype, "note", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_model_1.Usuario, data => data.id),
    (0, typeorm_1.JoinColumn)({ name: 'usuario_id' }),
    __metadata("design:type", usuario_model_1.Usuario)
], Noteshare.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Noteshare.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Noteshare.prototype, "updated_at", void 0);
exports.Noteshare = Noteshare = __decorate([
    (0, typeorm_1.Entity)()
], Noteshare);
//# sourceMappingURL=noteshare.model.js.map