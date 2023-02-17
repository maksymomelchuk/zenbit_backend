-- CreateTable
CREATE TABLE "FeedBack" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "FeedBack_pkey" PRIMARY KEY ("id")
);
