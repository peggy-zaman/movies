import { PrimaryGeneratedColumn } from "typeorm";
import { IBaseEntity } from "../interfaces/base_entity";

export class BaseEntity implements IBaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;
}