import { getCollection } from "astro:content";
import { CONFIG } from "@/data/config";
import { paginate } from "@/lib/pagination";

export async function getBlogPages() {
  const posts = await getCollection("blog");
  const sortedPosts = [...posts].sort(
    (a, b) =>
      new Date(b.data.publishedAt).getTime() -
      new Date(a.data.publishedAt).getTime(),
  );
  const pageSize = CONFIG.blog.postsPerPage;
  const pageCount = Math.max(1, Math.ceil(sortedPosts.length / pageSize));

  return Array.from({ length: pageCount }, (_, index) => ({
    ...paginate(sortedPosts, { page: index + 1, pageSize }),
    totalPosts: sortedPosts.length,
  }));
}