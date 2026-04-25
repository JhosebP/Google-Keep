"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const note_model_1 = require("../note/model/note.model");
const noteshare_model_1 = require("../noteshare/model/noteshare.model");
const usuario_model_1 = require("../usuario/model/usuario.model");
exports.default = (0, config_1.registerAs)('orm.config', () => ({
    type: 'postgres',
    host: '127.0.0.1',
    port: 5430,
    username: 'sa',
    password: '1844',
    database: 'googlekeep-db',
    entities: [usuario_model_1.Usuario, noteshare_model_1.Noteshare, note_model_1.Note, noteshare_model_1.Noteshare],
    synchronize: true,
}));
//# sourceMappingURL=orm.config.js.map