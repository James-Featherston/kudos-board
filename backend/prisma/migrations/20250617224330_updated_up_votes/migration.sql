/*
  Warnings:

  - The `upVotes` column on the `Card` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Card" DROP COLUMN "upVotes",
ADD COLUMN     "upVotes" INTEGER NOT NULL DEFAULT 0;
