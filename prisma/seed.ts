import { dummyProductData, dummyUserData } from './../dummyData/dummyData'
// /prisma/seed.js
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const createProducts = async () => {
  const productPromises = dummyProductData.map(async (product) => {
    await prisma.product.create({
      data: {
        ...product,
      },
    })
  })

  await Promise.all(productPromises)
}

const createUsers = async () => {
  const userPromises = dummyUserData.map(async (user) => {
    await prisma.user.create({
      data: {
        ...user,
      },
    })
  })

  await Promise.all(userPromises)
}

// Seed funksjoner

async function main() {
  console.log(`Start seeding ...`)
  createUsers()
  createProducts()
  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
