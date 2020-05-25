import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, CreateDateColumn } from "typeorm";
import { BranchStatus } from "../enums/branch-status";
import { RepositoryEntity } from "./repository.entity";
import { CommitEntity } from "./commit.entity";

@Entity('branch')
export class BranchEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ type: 'text' })
    error: string;

    @Column({ type: 'enum', enum: BranchStatus })
    status: BranchStatus;

    @ManyToOne(
        type => RepositoryEntity,
        repository => repository.branches,
    )
    @JoinColumn({ name: 'repository_id' })
    repository: RepositoryEntity;

    @Column({ name: 'repository_id' })
    repositoryId: number;

    @OneToMany(
        type => CommitEntity,
        commitEntity => commitEntity.branch
    )
    commits: CommitEntity[];

    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    createdAt: Date;

}