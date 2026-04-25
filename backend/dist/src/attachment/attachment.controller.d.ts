import { AttachmentService } from "./attachment.service";
export declare class AttachmentController {
    private readonly service;
    constructor(service: AttachmentService);
    getAll(): Promise<import("./model/attachment.model").Attachment[]>;
    saveFile(file: Express.Multer.File, id: number): Promise<import("./model/attachment.model").Attachment>;
}
