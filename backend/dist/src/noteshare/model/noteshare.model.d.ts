import { Note } from "../../note/model/note.model";
import { Usuario } from "../../usuario/model/usuario.model";
export declare class Noteshare {
    id: number;
    role: number;
    note: Note;
    usuario: Usuario;
    created_at: Date;
    updated_at: Date;
}
