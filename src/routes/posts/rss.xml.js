import postsJSON from "./_posts.js";

const render = (posts) => `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
        <title>FIGBERT Blog</title>
        <link>https://figbert.com/posts/</link>
        <description>My writeups, logs, posts, and general thoughts organized chronologically for your viewing pleasure.</description>
        <category>Technology/Programming/Middle East/Israel/Africa</category>
        <copyright>2020 FIGBERT. All rights reserved.</copyright>
        <atom:link href="http://figbert.com/posts/rss.xml" rel="self" type="application/rss+xml"/>
        <language>en-us</language>
        <image>
            <url>https://figbert.com/favicon-32x32.png</url>
            <title>FIGBERT Blog</title>
            <link>https://figbert.com/posts/</link>
        </image>
        ${posts.map(post => `
            <item>
                <title>${post.title}</title>
                <link>https://figbert.com/posts/${post.slug}</link>
                <guid>https://figbert.com/posts/${post.slug}</guid>
                <description><![CDATA[${post.html}]]></description>
                <pubDate>${new Date(post.date.split("/")[2], post.date.split("/")[1] - 1, post.date.split("/")[0]).toUTCString()}</pubDate>
                <author>figbert@figbert.com (FIGBERT)</author>
            </item>
        `).join("\n")}
    </channel>
</rss>
`;

export function get(req, res) {
    const content = render(postsJSON);
	res.writeHead(200, {
		"Content-Type": "application/rss+xml"
	});
    res.end(content);
}
