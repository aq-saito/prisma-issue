const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: { name: "John Doe" },
  });

  await prisma.user.update({
    where: { id: user.id },
    data: { name: "Updated" },
  });
}

main();
