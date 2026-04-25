import { Repository } from "typeorm";
import { Note } from "./model/note.model";
import { NoteDto } from "./dto/note.dto";
export declare class NoteService {
    private readonly repository;
    constructor(repository: Repository<Note>);
    getAll(): Promise<Note[]>;
    getById(id: number): Promise<Note>;
    save(data: NoteDto): Promise<"Se actualizo correctamente!!!" | "Se guardo correctamente!!!">;
    delete(id: number): Promise<string>;
    findById(id: number): Promise<Note>;
}
