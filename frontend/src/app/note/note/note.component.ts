import { CommonModule } from "@angular/common";
import { Component, EventEmitter, inject, Output, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { DialogModule } from "primeng/dialog";
import { InputTextModule } from "primeng/inputtext";
import { TextareaModule } from "primeng/textarea";
import { BasicService } from "@/app/service/basic.service";
import { NoteModel } from "../shared/note.model";

@Component({
    selector: 'app-note',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ButtonModule,
        DialogModule,
        InputTextModule,
        TextareaModule
    ],
    providers: [
        BasicService
    ],
    templateUrl: './note.component.html'
})
export class NoteComponent {
    http = inject(BasicService);
    visible = signal<boolean>(false);
    entity = signal<NoteModel>(new NoteModel());
    @Output() messageEvent = new EventEmitter<boolean>();

    constructor() {}

    load(entityId: number) {
        if (entityId > 0) {
            this.http.basePost(`notecontroller/getbyid/${entityId}`, {}).subscribe(
                (response: any) => {
                    if (response) {
                        this.entity.set(response);
                        this.onDialogVisibleChange(true);
                    }
                }
            );
        } else {
            this.entity.set(new NoteModel());
            this.onDialogVisibleChange(true);
        }
    }

    saveMethod() {
        let payload = { ...this.entity() };
        delete (payload as any).created_at;
        delete (payload as any).updated_at;

        this.http.basePost(`notecontroller/save`, payload).subscribe(
            response => {
                this.closeDialog();
                this.messageEvent.emit();
            }
        );
    }

    onDialogVisibleChange(value: boolean): void {
        this.visible.set(value);
    }

    closeDialog(): void {
        this.visible.set(false);
    }
}
