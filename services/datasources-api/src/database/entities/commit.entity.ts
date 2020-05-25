import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, CreateDateColumn, JoinColumn } from "typeorm";
import { BranchEntity } from "./branch.entity";

@Entity('commit')
export class CommitEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'commit_hash' })
    commitHash: string;

    @Column('simple-json')
    config: object;

    @ManyToOne(
        type => BranchEntity,
        branchEntity => branchEntity.commits
    )
    @JoinColumn({ name: 'branch_id' })
    branch: BranchEntity;

    @Column({ name: 'branch_id' })
    branchId: number;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    createdAt: Date;

}