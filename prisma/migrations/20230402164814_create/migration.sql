/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "doctor" (
    "id" TEXT NOT NULL,
    "crm" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "doctor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "speciality" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "speciality_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DoctorSpeciality" (
    "id" TEXT NOT NULL,
    "doctorId" TEXT,
    "specialityId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DoctorSpeciality_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "doctor_id_key" ON "doctor"("id");

-- CreateIndex
CREATE UNIQUE INDEX "doctor_crm_key" ON "doctor"("crm");

-- CreateIndex
CREATE UNIQUE INDEX "speciality_id_key" ON "speciality"("id");

-- CreateIndex
CREATE UNIQUE INDEX "speciality_name_key" ON "speciality"("name");

-- CreateIndex
CREATE UNIQUE INDEX "DoctorSpeciality_id_key" ON "DoctorSpeciality"("id");

-- CreateIndex
CREATE UNIQUE INDEX "user_id_key" ON "user"("id");

-- AddForeignKey
ALTER TABLE "DoctorSpeciality" ADD CONSTRAINT "DoctorSpeciality_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "doctor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DoctorSpeciality" ADD CONSTRAINT "DoctorSpeciality_specialityId_fkey" FOREIGN KEY ("specialityId") REFERENCES "speciality"("id") ON DELETE SET NULL ON UPDATE CASCADE;
