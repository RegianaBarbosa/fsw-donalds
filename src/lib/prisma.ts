import { PrismaClient } from "@prisma/client";

//garante que sempre terá pelo menos uma conexão aberta com o banco de dados
// e que a conexão seja fechada automaticamente quando a aplicação for encerrada.
declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: PrismaClient;
}

let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}

// vou usar para chamar meu banco de dados
export const db = prisma;