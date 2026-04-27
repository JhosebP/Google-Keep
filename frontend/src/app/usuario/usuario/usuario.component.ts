import { CommonModule } from "@angular/common";
import { Component, EventEmitter, inject, Output, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DatePickerModule } from "primeng/datepicker";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { BasicService } from "@/app/service/basic.service";
import { DialogModule } from "primeng/dialog";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";
import { UsuarioModel } from "../shared/usuario.model";

@Component({
    selector: 'app-usuario',
    standalone: true,
    imports: [
        CommonModule,
        DatePickerModule,
        FormsModule,
        TableModule,
        ButtonModule,
        ConfirmDialogModule,
        // ToastModule
        DialogModule,
        InputTextModule,
        PasswordModule
    ],
    providers: [
        BasicService
    ],
    templateUrl: './usuario.component.html',
})
export class UsuarioComponent {
    http = inject(BasicService);
    visible = signal<boolean>(false);
    entity = signal<UsuarioModel>(new UsuarioModel());
    @Output() messageEvent = new EventEmitter<boolean>();

    constructor() {
    }

    // load(entityId: number): void {
    //     console.warn('Load Usuario', entityId);
    //     // this.entity.set(new UsuarioModel());
    //     // this.onDialogVisibleChange(true);
    // // }

    // FUNCIONALIDAD DE EDITAR
    load(entityId: number){
        if (entityId > 0) {
            
            this.http.basePost(`usuariocontroller/getbyid/${entityId}`, {}).subscribe(
                (response: any) => {
                    if (response) {
                        this.entity.set(response);
                        this.onDialogVisibleChange(true);
                    }
                }
            );
        } else {
            this.entity.set(new UsuarioModel());
            this.onDialogVisibleChange(true);
        }
    }

    // FUNCIONALIDAD DE EDITAR Y GUARDAR
    saveMethod() {
        console.log('Save entity', this.entity());
        
        let payload = { ...this.entity() };
        
        if (!payload.password) {
            delete payload.password;
        }
        delete (payload as any).created_at;
        delete (payload as any).updated_at;

        this.http.basePost(`usuariocontroller/save`, payload).subscribe(
            response => {
                console.warn('Save response', response);
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