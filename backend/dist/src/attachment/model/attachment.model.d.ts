import { Note } from "../../note/model/note.model";
export declare class Attachment {
    id: number;
    filename: string;
    filetype: string;
    filesize: number;
    filedata: Buffer;
    note: Note;
}
