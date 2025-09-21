/*
  Warnings:

  - You are about to drop the column `region_id` on the `WebsiteTick` table. All the data in the column will be lost.
  - You are about to drop the column `response_time_ms` on the `WebsiteTick` table. All the data in the column will be lost.
  - You are about to drop the column `website_id` on the `WebsiteTick` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Website` table without a default value. This is not possible if the table is not empty.
  - Added the required column `regionId` to the `WebsiteTick` table without a default value. This is not possible if the table is not empty.
  - Added the required column `responseTimeMs` to the `WebsiteTick` table without a default value. This is not possible if the table is not empty.
  - Added the required column `websiteId` to the `WebsiteTick` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."WebsiteTick" DROP CONSTRAINT "WebsiteTick_region_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."WebsiteTick" DROP CONSTRAINT "WebsiteTick_website_id_fkey";

-- AlterTable
ALTER TABLE "public"."Website" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."WebsiteTick" DROP COLUMN "region_id",
DROP COLUMN "response_time_ms",
DROP COLUMN "website_id",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "regionId" TEXT NOT NULL,
ADD COLUMN     "responseTimeMs" INTEGER NOT NULL,
ADD COLUMN     "websiteId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Website" ADD CONSTRAINT "Website_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."WebsiteTick" ADD CONSTRAINT "WebsiteTick_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "public"."Region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."WebsiteTick" ADD CONSTRAINT "WebsiteTick_websiteId_fkey" FOREIGN KEY ("websiteId") REFERENCES "public"."Website"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
