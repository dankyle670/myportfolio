import rss from '@astrojs/rss';
import { g as getCollection } from './__q7iBrJPN.mjs';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';

const parser = new MarkdownIt();

async function GET(context) {
  const blog = await getCollection("blog");
  return rss({
    title: "Gianmarco Cavallo’s Blog",
    description: "my blog",
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      content: sanitizeHtml(parser.render(post.body)),
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/blog/[slug]` routes
      link: `/blog/${post.slug}/`,
    })),
  });
}

export { GET };
