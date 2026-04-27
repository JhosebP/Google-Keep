export class NoteModel {
    id: number = 0;
    title: string = '';
    content: string = '';
    activo: boolean = true;
    created_at?: Date;
    updated_at?: Date;
}
