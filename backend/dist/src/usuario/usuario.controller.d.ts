import { UsuarioDto } from './dto/usuario.dto';
import { UsuarioService } from './usuario.service';
export declare class UsuarioController {
    private readonly service;
    constructor(service: UsuarioService);
    getAll(): Promise<import("./model/usuario.model").Usuario[]>;
    getAllUser(): Promise<import("./model/usuario.model").Usuario[]>;
    getPerson(id: number): Promise<import("./model/usuario.model").Usuario>;
    save(data: UsuarioDto): Promise<"Se actualizo correctamente!!!" | "Se guardo correctamente!!!">;
    deletePerson(id: number): Promise<string>;
    generateJWT(data: UsuarioDto): Promise<string>;
    verifyPassword({ plainPassword, hashedPassword }: {
        plainPassword: string;
        hashedPassword: string;
    }): Promise<boolean>;
    update(id: number, data: UsuarioDto): Promise<void>;
}
