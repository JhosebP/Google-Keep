import { Repository } from "typeorm";
import { Usuario } from "./model/usuario.model";
import { UsuarioDto } from "./dto/usuario.dto";
export declare class UsuarioService {
    private readonly repository;
    update(id: number, data: UsuarioDto): void;
    constructor(repository: Repository<Usuario>);
    getAll(): Promise<Usuario[]>;
    getById(id: number): Promise<Usuario>;
    save(data: UsuarioDto): Promise<"Se actualizo correctamente!!!" | "Se guardo correctamente!!!">;
    delete(id: number): Promise<string>;
    findById(id: number): Promise<Usuario>;
    generateJWT(data: UsuarioDto): Promise<string>;
    createHashedPassword(password: string): Promise<string>;
    verifyPassword(plainPassword: string, hashedPassword: string): Promise<boolean>;
}
