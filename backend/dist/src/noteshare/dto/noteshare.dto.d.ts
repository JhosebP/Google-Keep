import { NoteDto } from "../../note/dto/note.dto";
import { UsuarioDto } from "../../usuario/dto/usuario.dto";
export declare class NoteshareDto {
    id?: number;
    role: number;
    note: NoteDto;
    usuario: UsuarioDto;
}
