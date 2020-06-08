import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import { BranchEntity } from "./branch.entity";
import { DataLoaderEntity } from "./data-loader.entity";

@Entity('repository')
export class RepositoryEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'git_url', type: 'text' })
    gitUrl: string;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    createdAt: Date;

    @OneToMany(
        type => BranchEntity,
        branchEntity => branchEntity.repository
    )
    branches: BranchEntity[];

    @OneToOne(
        type => DataLoaderEntity,
        dataLoaderEntity => dataLoaderEntity.repository
    )
    @JoinColumn({ name: 'data_loader_id' })
    dataLoader: DataLoaderEntity;

    @Column({ name: 'data_loader_id' })
    dataLoaderId: number;

}