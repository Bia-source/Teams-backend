-- CreateTable
CREATE TABLE `tb_squad` (
    `id` VARCHAR(191) NOT NULL,
    `name_squad` VARCHAR(50) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
