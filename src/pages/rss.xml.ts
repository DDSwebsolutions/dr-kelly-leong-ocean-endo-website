import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { site } from '@data/site';

export async function GET(context: APIContext) {
  const posts = (await getCollection('education', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime()
  );

  return rss({
    title: `${site.name} — Education Center`,
    description:
      'Clear, trustworthy guides on root canals, tooth pain, dental emergencies, and saving natural teeth from Ocean Endodontics in San Francisco.',
    site: context.site ?? site.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: `/education/${post.id}`,
      categories: [post.data.category],
      author: post.data.author,
    })),
    customData: `<language>en-us</language>`,
    stylesheet: false,
  });
}
