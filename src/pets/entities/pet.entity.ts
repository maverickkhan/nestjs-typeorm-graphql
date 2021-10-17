import { Field, Int, ObjectType } from "@nestjs/graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Pet extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field(Type => Int)
    id: number;

    @Column()
    @Field()
    name: string;

    @Column({nullable: true})
    @Field({nullable: true})
    type?: string;
}
