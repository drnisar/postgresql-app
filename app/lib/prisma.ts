// filepath: /Users/nisar/Desktop/workspace/postgresql-app/lib/prisma.ts
import { PrismaClient } from "@prisma/client";

// Declare a global variable to hold the Prisma Client instance
// This helps prevent creating multiple instances during development hot-reloading
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Initialize Prisma Client
// Use the global instance if it exists (in development), otherwise create a new one
const prisma = global.prisma || new PrismaClient();

// In development, assign the new instance to the global variable
if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

export default prisma;
