/*
  Warnings:

  - The primary key for the `Workspace` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `name` on the `Workspace` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Workspace_name_key` ON `Workspace`;

-- AlterTable
ALTER TABLE `Workspace` DROP PRIMARY KEY,
    DROP COLUMN `name`,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `WorkspaceInstance` (
    `id` VARCHAR(191) NOT NULL,
    `workspaceId` VARCHAR(191) NOT NULL,
    `status` ENUM('STOPPED', 'CREATING', 'INITIALIZING', 'RUNNING') NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `WorkspaceInstance_workspaceId_key`(`workspaceId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `WorkspaceInstance` ADD CONSTRAINT `WorkspaceInstance_workspaceId_fkey` FOREIGN KEY (`workspaceId`) REFERENCES `Workspace`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
