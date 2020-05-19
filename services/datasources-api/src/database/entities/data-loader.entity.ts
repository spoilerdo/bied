import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, OneToOne } from "typeorm";
import { RepositoryEntity } from "./repository.entity";

@Entity('data_loader')
export class DataLoaderEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ name: 'research_id' })
    researchId: number;

    @OneToOne(
        type => RepositoryEntity,
        repositoryEntity => repositoryEntity.dataLoader
    )
    repository: RepositoryEntity;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    createdAt: Date;

}