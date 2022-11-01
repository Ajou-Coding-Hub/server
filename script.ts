import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: 'gron1gh1@ajou.ac.kr',
      name: '강선규',
    },
  });

  await prisma.guide.create({
    data: {
      level: 1,
      name: '가이드 테스트',
      owner: {
        connect: {
          id: user.id,
        },
      },
      guideProblems: {
        create: [
          {
            isSolved: false,
            markdown: `asdasd`,
          },
        ],
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
