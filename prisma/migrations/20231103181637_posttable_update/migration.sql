-- CreateTable
CREATE TABLE `posts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `post_category_id` INTEGER NULL,
    `title` VARCHAR(150) NULL,
    `slug` VARCHAR(150) NULL,
    `short_details` VARCHAR(255) NULL,
    `details` TEXT NULL,
    `image` VARCHAR(255) NULL,
    `user_id` INTEGER NULL,
    `featured` ENUM('Active', 'Inactive') NULL,
    `status` ENUM('Active', 'Inactive') NULL,
    `expired_at` DATETIME(0) NULL,
    `created_at` DATETIME(0) NULL,
    `updated_at` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `services` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(150) NULL,
    `short_details` VARCHAR(250) NULL,
    `details` TEXT NULL,
    `image` VARCHAR(150) NULL,
    `created_at` DATETIME(0) NULL,
    `updated_at` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(150) NULL,
    `email` VARCHAR(150) NULL,
    `phone` VARCHAR(30) NULL,
    `password` VARCHAR(50) NULL,
    `created_at` DATETIME(0) NULL,
    `updated_at` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `hero_contains` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NULL,
    `description` TEXT NULL,
    `image1` VARCHAR(255) NULL,
    `image2` VARCHAR(255) NULL,
    `image3` VARCHAR(255) NULL,
    `image4` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stat_lists` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `followers` FLOAT NULL DEFAULT 0.00,
    `solved` FLOAT NULL DEFAULT 0.00,
    `customers` FLOAT NULL DEFAULT 0.00,
    `projects` FLOAT NULL DEFAULT 0.00,
    `created_at` DATETIME(0) NULL,
    `updated_at` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `post_categories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NULL,
    `slug` VARCHAR(150) NULL,
    `short_details` TEXT NULL,
    `order_by` INTEGER NULL DEFAULT 0,
    `status` ENUM('Active', 'Inactive') NULL,
    `created_at` DATETIME(0) NULL,
    `updated_at` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
