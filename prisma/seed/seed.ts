import { PrismaClient } from "@prisma/client";
import articles from "../../src/data/articles.json";
import games from "../../src/data/games.json";
import { slugify } from "../../src/helpers/slugify";

const prisma = new PrismaClient();

const isDev = process.env.NODE_ENV === "development";
async function main() {
  console.log("DB SEED");

  if (!isDev) {
    throw new Error("NOT A DEVELOPMENT ENVIRONTMENT");
  }

  const [, , ...args] = process.argv;
  const truncate = !!args.find((arg) => arg === "-truncate");
  const articles = !!args.find((arg) => arg === "articles");
  const games = !!args.find((arg) => arg === "games");

  if (truncate && articles) {
    await truncateArticles();
  }

  if (truncate && games) {
    await truncateGamesAndGenres();
  }

  if (articles) {
    await seedArticles();
  }

  if (games) {
    await seedGamesAndGenres();
  }
}

async function seedArticles() {
  for (let article of articles) {
    const record = await prisma.article.create({
      data: {
        title: article.title,
        slug: slugify(article.title),
        excerpt: article.excerpt,
        image: article.image,
        content: article.content,
        publishedAt: new Date(article.publish_date),
      },
    });

    console.log("created article", record.id, record.title);
  }
}

console.log(process.argv);

async function seedGamesAndGenres() {
  console.log("seed games and genres");
  for (let game of games) {
    const genreArray = game.genre.map((genreFromArray) => {
      const slug = slugify(genreFromArray);

      return {
        genre: {
          connectOrCreate: {
            where: { slug },
            create: {
              title: genreFromArray,
              slug,
            },
          },
        },
      };
    });

    const record = await prisma.games.create({
      data: {
        title: game.title,
        slug: game.slug,
        year: game.year,
        image: game.fileName,
        link: game.link || "#",
        genres: {
          create: genreArray,
        },
      },
    });

    console.log("Created game: ", record.id, record.title);
  }
}

async function truncateArticles() {
  console.log("Truncating articles");

  await prisma.article.deleteMany();
  await prisma.$executeRawUnsafe(
    "DELETE FROM SQLITE_SEQUENCE WHERE name=$1;",
    "Article"
  );
}

async function truncateGamesAndGenres() {
  console.log("Truncating games and genres");

  await prisma.gameGenre.deleteMany();
  await prisma.games.deleteMany();
  await prisma.genre.deleteMany();

  await prisma.$executeRawUnsafe(
    "DELETE FROM SQLITE_SEQUENCE WHERE name=$1",
    "GameGenre"
  );

  await prisma.$executeRawUnsafe(
    "DELETE FROM SQLITE_SEQUENCE WHERE name=$1;",
    "Games"
  );

  await prisma.$executeRawUnsafe(
    "DELETE FROM SQLITE_SEQUENCE WHERE name=$1",
    "Genre"
  );

  // console.log("truncanting games and genres");
  // await prisma.gameGenre.deleteMany();
  // await prisma.games.deleteMany();
  // await prisma.genre.deleteMany();
  // await prisma.$executeRawUnsafe(
  //   "DELETE FROM SQLITE_SEQUENCE WHERE name=$1;",
  //   "GameGenre"
  // );
  // await prisma.$executeRawUnsafe(
  //   "DELETE FROM SQLITE_SEQUENCE WHERE name=$1;",
  //   "Games"
  // );
  // await prisma.$executeRawUnsafe(
  //   "DELETE FROM SQLITE_SEQUENCE WHERE name=$1;",
  //   "Genre"
  // );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
