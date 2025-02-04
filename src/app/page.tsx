import { Pagination } from "@/components/Pagination/Pagination";
import ArticleService from "@/services/Articles";
import Image from "next/image";

export default async function Home({
  searchParams,
}: {
  searchParams?: { page?: string; limit?: string };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const limit = Number(searchParams?.limit) || 10;
  const articles = await ArticleService.getHomeArticles(currentPage, limit);
  const latestArticles = await ArticleService.getHomeLatestArticles();

  return (
    <div>
      <div className="w-full h-[35vh] bg-orange-400 flex-center">
        <p>Test</p>
      </div>

      <div className="container mx-auto gap-6">
        <div className="grid grid-cols-4 gap-4 h-[35vh]">
          {latestArticles.data.map((highlightedArticle, i) => {
            return (
              <div key={i} className="flex-center relative overflow-hidden">
                <div className="w-full h-full">
                  <Image
                    alt={highlightedArticle.title}
                    src={`/assets/images/articles/${highlightedArticle.image}`}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105 "
                    width={600}
                    height={400}
                  />
                </div>

                <p className="absolute bottom-0 pt-6 pb-6 px-2 bg-gradient-to-t from-slate-900 via-slate-800 to-transparent w-full">
                  {highlightedArticle.title}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-12 gap-4 ">
          <div className="col-span-8">
            <div className="flex flex-col gap-4">
              {articles.data.map((article, i) => {
                return (
                  <div
                    key={i}
                    className="flex gap-4 rounded-md bg-slate-800 py-4"
                  >
                    <div className="flex items-center">
                      <div className="h-40 rounde-r-lg overflow-hidden"></div>
                      <Image
                        alt={article.title}
                        src={`/assets/images/articles/${article.image}`}
                        className="h-full w-full object-cover transition duration-500 hover:scale-105 rounded-r-lg"
                        width={600}
                        height={400}
                      />
                    </div>

                    <div className="w-full flex flex-col gap-2 pl-4">
                      <h2 className="text-3xl mb-4">{article.title}</h2>
                      <p className="flex-grow">{article.excerpt}</p>
                      <p className="flex-grow">
                        {article.publishedAt.toISOString()}
                      </p>
                      <button className="bg-slate-700 hover:bg-indigo-400/40 rounded-lg px-4 py-2 inline max-w-max transition duration-300">
                        Ler mais
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="my-8">
              <Pagination
                currentPage={articles.metadata.page}
                totalPages={articles.metadata.totalPages}
              />
            </div>
          </div>

          <div className="col-span-4 bg-emerald-400">B</div>
        </div>
      </div>
    </div>
  );
}
