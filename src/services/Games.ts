import { metadata } from "@/app/layout";
import Games from "@/libs/database/Games";

const HOME_LATEST_COUNT = 4;

const GamesService = {
  getGamesList: async (page = 1, limit = 10) => {
    const offset = (page - 1) * limit;
    const data = await Games.get({ limit: limit, offset: offset });
    const total = await Games.count({});
    const totalPages = Math.ceil(total / limit);

    return {
      data,
      metadata: {
        page,
        limit,
        offset,
        total,
        totalPages,
      },
    };
  },
};

export default GamesService;
