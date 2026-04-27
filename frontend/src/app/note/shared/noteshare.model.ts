import { UsuarioModel } from "../../usuario/shared/usuario.model";
import { NoteModel } from "./note.model";

export class NoteshareModel {
    id: number = 0;
    role: number = 0; // 1: Reader, 2: Editor
    note: NoteModel = new NoteModel();
    usuario: UsuarioModel = new UsuarioModel();
    created_at?: Date;
    updated_at?: Date;
}
