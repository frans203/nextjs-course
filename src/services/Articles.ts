import { metadata } from "@/app/layout";
import Article from "@/libs/database/Articles";

const HOME_LATEST_COUNT = 4;

const ArticleService = {
  getArticles: async (page = 1, limit = 10) => {
    const offset = (page - 1) * 10 + HOME_LATEST_COUNT;
    const orderBy = { publishedAt: "desc" };
    const data = await Article.get({ orderBy, limit, offset });
    const count = await Article.count({});
    const totalPages = Math.ceil(count / limit);

    return {
      data,
      metadata: {
        page,
        limit,
        offset,
        total: count,
        totalPages,
      },
    };
  },
  getHomeArticles: async (page = 1, limit = 10) => {
    const offset = (page - 1) * limit + HOME_LATEST_COUNT;
    const orderBy = { publishedAt: "desc" };
    const data = await Article.get({ orderBy, limit, offset });
    const count = await Article.count({});
    const totalPages = Math.ceil((count - HOME_LATEST_COUNT) / limit);

    return {
      data,
      metadata: {
        page,
        limit,
        offset,
        total: count,
        totalPages,
      },
    };
  },
  getHomeLatestArticles: async () => {
    const limit = HOME_LATEST_COUNT;
    const offset = 0;
    const page = 1;
    const orderBy = { publishedAt: "desc" };
    const data = await Article.get({ orderBy, limit, offset });
    const count = await Article.count({});
    const total = await Article.count({});
    const totalPages = Math.ceil((total - HOME_LATEST_COUNT) / limit);

    return {
      data,
      metadata: {
        page,
        limit,
        offset,
        total: count,
        totalPages,
      },
    };
  },
};

export default ArticleService;
