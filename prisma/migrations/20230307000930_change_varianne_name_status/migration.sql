/*
  Warnings:

  - You are about to drop the column `state` on the `order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `order` DROP COLUMN `state`,
    ADD COLUMN `status` BOOLEAN NOT NULL DEFAULT false;
