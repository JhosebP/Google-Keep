import { registerAs } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Note } from "src/note/model/note.model";
import { Noteshare } from "src/noteshare/model/noteshare.model";
import { Usuario } from "src/usuario/model/usuario.model";
import { Attachment } from "src/attachment/model/attachment.model";

export default registerAs(
    'orm.config',
    (): TypeOrmModuleOptions => ({
        type: 'postgres',
        host: '127.0.0.1',
        port: 5432,
        username: 'sa',
        password: '1844',
        database: 'googlekeep-db',
        entities: [Usuario, Noteshare, Note, Attachment],
        synchronize: true,
    }),
); 