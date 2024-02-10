const id = "post1.md";
						const collection = "blog";
						const slug = "post1";
						const body = "\n# Hi there!\n\nThis Markdown file creates a page at `your-domain.com/post1/`\n\nIt probably isn't styled much, but Markdown does support:\n\n- **bold** and _italics._\n- lists\n- [links](https://astro.build)\n- and more!\n";
						const data = {title:"Hello, World",pubDate:new Date(1674259200000),description:"this is a post example"};
						const _internal = {
							type: 'content',
							filePath: "/home/dankyle/Documents/OWN_PROJ/professionel/my_portfolio/myportfolio/src/content/blog/post1.md",
							rawData: "\nlayout: ../../layouts/LayoutBlogPost.astro\ntitle: \"Hello, World\"\ndescription: \"this is a post example\"\npubDate: 2023-01-21\ncategory: \"intro\"",
						};

export { _internal, body, collection, data, id, slug };
