import { Repository } from "typeorm";
import { Noteshare } from "./model/noteshare.model";
import { NoteshareDto } from "./dto/noteshare.dto";
export declare class NoteShareService {
    private readonly repository;
    constructor(repository: Repository<Noteshare>);
    getAll(): Promise<Noteshare[]>;
    getById(id: number): Promise<Noteshare>;
    save(data: NoteshareDto): Promise<"Se actualizo correctamente!!!" | "Se guardo correctamente!!!">;
    delete(id: number): Promise<string>;
    findById(id: number): Promise<Noteshare>;
}
