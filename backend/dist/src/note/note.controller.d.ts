import { NoteService } from "./note.service";
import { NoteDto } from "./dto/note.dto";
export declare class NoteController {
    private readonly service;
    constructor(service: NoteService);
    getAll(): Promise<import("./model/note.model").Note[]>;
    getPerson(id: number): Promise<import("./model/note.model").Note>;
    save(data: NoteDto): Promise<"Se actualizo correctamente!!!" | "Se guardo correctamente!!!">;
    delete(id: number): Promise<string>;
}
