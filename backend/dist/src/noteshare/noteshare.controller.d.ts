import { NoteShareService } from "./noteshare.service";
import { NoteshareDto } from "./dto/noteshare.dto";
export declare class NoteShareController {
    private readonly service;
    constructor(service: NoteShareService);
    getAll(): Promise<import("./model/noteshare.model").Noteshare[]>;
    get(id: number): Promise<import("./model/noteshare.model").Noteshare>;
    save(data: NoteshareDto): Promise<"Se actualizo correctamente!!!" | "Se guardo correctamente!!!">;
    delete(id: number): Promise<string>;
}
