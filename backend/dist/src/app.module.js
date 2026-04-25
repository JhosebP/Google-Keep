"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const usuario_controller_1 = require("./usuario/usuario.controller");
const orm_config_1 = __importDefault(require("./config/orm.config"));
const typeorm_1 = require("@nestjs/typeorm");
const usuario_model_1 = require("./usuario/model/usuario.model");
const config_1 = require("@nestjs/config");
const usuario_service_1 = require("./usuario/usuario.service");
const noteshare_model_1 = require("./noteshare/model/noteshare.model");
const note_model_1 = require("./note/model/note.model");
const noteshare_controller_1 = require("./noteshare/noteshare.controller");
const noteshare_service_1 = require("./noteshare/noteshare.service");
const note_controller_1 = require("./note/note.controller");
const note_service_1 = require("./note/note.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [orm_config_1.default],
                expandVariables: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: orm_config_1.default
            }),
            typeorm_1.TypeOrmModule.forFeature([usuario_model_1.Usuario, noteshare_model_1.Noteshare, note_model_1.Note, noteshare_model_1.Noteshare])
        ],
        controllers: [
            app_controller_1.AppController,
            usuario_controller_1.UsuarioController,
            noteshare_controller_1.NoteShareController,
            note_controller_1.NoteController
        ],
        providers: [
            usuario_service_1.UsuarioService,
            noteshare_service_1.NoteShareService,
            note_service_1.NoteService
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map