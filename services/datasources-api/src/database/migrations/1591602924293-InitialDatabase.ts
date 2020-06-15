import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialDatabase1591602924293 implements MigrationInterface {
    name = 'InitialDatabase1591602924293'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `data_loader` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `research_id` int NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `repository` (`id` int NOT NULL AUTO_INCREMENT, `git_url` text NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `data_loader_id` int NOT NULL, UNIQUE INDEX `REL_8de3cca4e2fef06c436662a1d0` (`data_loader_id`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `commit` (`id` int NOT NULL AUTO_INCREMENT, `commit_hash` varchar(255) NOT NULL, `config` text NOT NULL, `branch_id` int NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `branch` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `error` text NOT NULL, `status` enum ('PENDING', 'VALIDATING', 'SUCCESS', 'FAILED') NOT NULL, `repository_id` int NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `repository` ADD CONSTRAINT `FK_8de3cca4e2fef06c436662a1d02` FOREIGN KEY (`data_loader_id`) REFERENCES `data_loader`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `commit` ADD CONSTRAINT `FK_ef6ae44ce72920a70166c75687f` FOREIGN KEY (`branch_id`) REFERENCES `branch`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `branch` ADD CONSTRAINT `FK_9bf4dc309fb4d0922356a45378e` FOREIGN KEY (`repository_id`) REFERENCES `repository`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `branch` DROP FOREIGN KEY `FK_9bf4dc309fb4d0922356a45378e`", undefined);
        await queryRunner.query("ALTER TABLE `commit` DROP FOREIGN KEY `FK_ef6ae44ce72920a70166c75687f`", undefined);
        await queryRunner.query("ALTER TABLE `repository` DROP FOREIGN KEY `FK_8de3cca4e2fef06c436662a1d02`", undefined);
        await queryRunner.query("DROP TABLE `branch`", undefined);
        await queryRunner.query("DROP TABLE `commit`", undefined);
        await queryRunner.query("DROP INDEX `REL_8de3cca4e2fef06c436662a1d0` ON `repository`", undefined);
        await queryRunner.query("DROP TABLE `repository`", undefined);
        await queryRunner.query("DROP TABLE `data_loader`", undefined);
    }

}
