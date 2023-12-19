import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const car = await prisma.car.create({
    data:   {
        brand: "Toyota",
        model: "Camry",
        year: 2022,
        description: "The Toyota Camry is a reliable midsize sedan known for its comfort and fuel efficiency.",
        },
  });

  console.log(`Seeded car with id: ${car.id}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });