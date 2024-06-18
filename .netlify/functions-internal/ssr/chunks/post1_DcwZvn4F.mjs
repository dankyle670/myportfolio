import { a as createComponent, r as renderTemplate, d as renderComponent, u as unescapeHTML } from './astro/server_CWF3mpvc.mjs';
import 'kleur/colors';
import { $ as $$LayoutBlogPost } from './LayoutBlogPost_ubIEGEhE.mjs';

const html = "<h1 id=\"hi-there\">Hi there!</h1>\n<p>This Markdown file creates a page at <code>your-domain.com/post1/</code></p>\n<p>It probably isn’t styled much, but Markdown does support:</p>\n<ul>\n<li><strong>bold</strong> and <em>italics.</em></li>\n<li>lists</li>\n<li><a href=\"https://astro.build\">links</a></li>\n<li>and more!</li>\n</ul>";

				const frontmatter = {"layout":"../../layouts/LayoutBlogPost.astro","title":"Hello, World","description":"this is a post example","pubDate":"2023-01-21T00:00:00.000Z","category":"intro","minutesRead":"1 min read"};
				const file = "/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/content/blog/post1.md";
				const url = undefined;
				function rawContent() {
					return "\n# Hi there!\n\nThis Markdown file creates a page at `your-domain.com/post1/`\n\nIt probably isn't styled much, but Markdown does support:\n\n- **bold** and _italics._\n- lists\n- [links](https://astro.build)\n- and more!\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"hi-there","text":"Hi there!"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$LayoutBlogPost, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
