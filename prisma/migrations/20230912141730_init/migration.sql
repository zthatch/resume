-- CreateTable
CREATE TABLE "workExperience" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "jobTitle" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endData" DATETIME NOT NULL,
    "workSummary" TEXT NOT NULL,
    "accomplishmentsCommaSep" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
