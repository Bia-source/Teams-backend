/*
  Warnings:

  - The values [LEVANTADOR,PONTEIRO,OPOSTO,CENTRAL,LIBERO] on the enum `tb_player_position` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `tb_player` MODIFY `position` ENUM('levantador', 'ponteiro', 'oposto', 'central', 'libero') NOT NULL;
