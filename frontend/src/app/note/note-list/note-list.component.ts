import { CommonModule } from "@angular/common";
import { Component, afterNextRender, inject, OnInit, signal, ViewChild } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ConfirmationService } from "primeng/api";
import { ToolbarModule } from "primeng/toolbar";
import { CardModule } from "primeng/card";
import { TooltipModule } from "primeng/tooltip";
import { BasicService } from "@/app/service/basic.service";
import { NoteModel } from "../shared/note.model";
import { NoteComponent } from "../note/note.component";
import { NoteshareComponent } from "../noteshare/noteshare.component";

@Component({
    selector: 'app-note-list',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ButtonModule,
        ConfirmDialogModule,
        ToolbarModule,
        CardModule,
        TooltipModule,
        NoteComponent,
        NoteshareComponent
    ],
    providers: [
        ConfirmationService,
        BasicService
    ],
    templateUrl: './note-list.component.html'
})
export class NoteListComponent implements OnInit {

    @ViewChild(NoteComponent) noteComponent!: NoteComponent;
    @ViewChild(NoteshareComponent) noteshareComponent!: NoteshareComponent;
    
    dataNotes = signal<NoteModel[]>([]);

    private confirmationService = inject(ConfirmationService);
    service = inject(BasicService);

    constructor() {
        afterNextRender(() => {
            this.loadNotes();
        });
    }

    ngOnInit(): void {
    }

    loadNotes(): void {
        this.service.basePost(`notecontroller/getall`, {}).subscribe(
            (response: NoteModel[]) => {
                this.dataNotes.set(response);
            },
            error => console.error(error)
        );
    }

    createNote() {
        this.noteComponent.load(0);
    }

    updateNote(data: NoteModel) {
        this.noteComponent.load(data.id);
    }

    shareNote(data: NoteModel) {
        this.noteshareComponent.load(data);
    }

    deleteNote(data: NoteModel, event: Event) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: `¿Está seguro de eliminar la nota "${data.title}"?`,
            header: 'Eliminar Nota',
            icon: 'pi pi-exclamation-triangle',
            rejectLabel: 'Cancelar',
            rejectButtonProps: {
                label: 'Cancelar',
                severity: 'secondary',
                outlined: true
            },
            acceptButtonProps: {
                label: 'Eliminar',
                severity: 'danger'
            },
            accept: () => {
                this.service.basePost(`notecontroller/delete/${data.id}`, {}).subscribe(
                    () => {
                        this.loadNotes();
                    }
                );
            }
        });
    }
}
