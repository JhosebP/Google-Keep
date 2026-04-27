import { CommonModule } from "@angular/common";
import { Component, inject, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { DialogModule } from "primeng/dialog";
import { SelectModule } from "primeng/select";
import { BasicService } from "@/app/service/basic.service";
import { NoteModel } from "../shared/note.model";
import { NoteshareModel } from "../shared/noteshare.model";
import { UsuarioModel } from "../../usuario/shared/usuario.model";
import { ToastModule } from "primeng/toast";
import { MessageService } from "primeng/api";
import { TableModule } from "primeng/table";
import { DividerModule } from "primeng/divider";

@Component({
    selector: 'app-noteshare',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ButtonModule,
        DialogModule,
        SelectModule,
        ToastModule,
        TableModule,
        DividerModule
    ],
    providers: [
        BasicService,
        MessageService
    ],
    templateUrl: './noteshare.component.html'
})
export class NoteshareComponent {
    http = inject(BasicService);
    messageService = inject(MessageService);
    
    visible = signal<boolean>(false);
    currentNote = signal<NoteModel | null>(null);
    
    // Form fields
    selectedUsuario = signal<UsuarioModel | null>(null);
    selectedRole = signal<number>(1); // Default to Reader
    
    // Options
    usuarios = signal<UsuarioModel[]>([]);
    roles = [
        { label: 'Lector', value: 1 },
        { label: 'Editor', value: 2 }
    ];

    // Current Shares
    currentShares = signal<NoteshareModel[]>([]);

    constructor() {}

    load(note: NoteModel) {
        this.currentNote.set(note);
        this.selectedUsuario.set(null);
        this.selectedRole.set(1);
        
        // Load all users to share with
        this.http.basePost('usuariocontroller/getall', {}).subscribe(
            (response: UsuarioModel[]) => {
                this.usuarios.set(response);
            }
        );

        // Load current shares for this note
        this.loadShares();
        this.onDialogVisibleChange(true);
    }

    loadShares() {
        this.http.basePost('notesharecontroller/getall', {}).subscribe(
            (response: NoteshareModel[]) => {
                // Filter shares only for the current note
                const shares = response.filter(s => s.note.id === this.currentNote()?.id);
                this.currentShares.set(shares);
            }
        );
    }

    shareMethod() {
        if (!this.selectedUsuario() || !this.currentNote()) {
            return;
        }

        const payload = new NoteshareModel();
        payload.note = this.currentNote()!;
        payload.usuario = this.selectedUsuario()!;
        payload.role = this.selectedRole();
        
        // Remove nested objects properties that are not needed to avoid circular JSON or redundant data if needed by TypeORM,
        // but typically TypeORM can handle nested id objects.
        const shareData = {
            role: payload.role,
            note: { id: payload.note.id },
            usuario: { id: payload.usuario.id }
        };

        this.http.basePost(`notesharecontroller/save`, shareData).subscribe(
            () => {
                this.messageService.add({severity:'success', summary:'Compartido', detail:'Nota compartida correctamente.'});
                this.loadShares();
                this.selectedUsuario.set(null); // Reset after sharing
            },
            error => {
                this.messageService.add({severity:'error', summary:'Error', detail:'No se pudo compartir la nota.'});
            }
        );
    }

    removeShare(shareId: number) {
        this.http.basePost(`notesharecontroller/deletebyid/${shareId}`, {}).subscribe(
            () => {
                this.messageService.add({severity:'success', summary:'Eliminado', detail:'Acceso revocado correctamente.'});
                this.loadShares();
            }
        );
    }

    getRoleLabel(roleValue: number): string {
        return roleValue === 1 ? 'Lector' : 'Editor';
    }

    onDialogVisibleChange(value: boolean): void {
        this.visible.set(value);
    }

    closeDialog(): void {
        this.visible.set(false);
    }
}
