import { Repository } from "typeorm";
import { Attachment } from "./model/attachment.model";
export declare class AttachmentService {
    private readonly repository;
    constructor(repository: Repository<Attachment>);
    getAll(): Promise<Attachment[]>;
    save(data: Express.Multer.File, entityId: number): Promise<Attachment>;
}
