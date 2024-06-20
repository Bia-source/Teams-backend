/*
  Warnings:

  - Added the required column `squad_id` to the `tb_player` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tb_player` ADD COLUMN `squad_id` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `tb_player` ADD CONSTRAINT `tb_player_squad_id_fkey` FOREIGN KEY (`squad_id`) REFERENCES `tb_squad`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
