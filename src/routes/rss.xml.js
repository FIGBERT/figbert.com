import postsJSON from "./posts/_posts.js";
import projectsJSON from "./projects/_projects.js";

const render = (posts, projects) => `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
    <channel>
        <title>FIGBERT Blog</title>
        <link>https://figbert.com/posts/</link>
        <description>My writeups, logs, posts, and general thoughts organized chronologically for your viewing pleasure.</description>
        <category>Technology/Programming</category>
        <copyright>2020 FIGBERT. All rights reserved.</copyright>
        <language>en-us</language>
        <image>
            <url>https://figbert.com/favicon-32x32.png</url>
            <title>FIGBERT</title>
            <link>https://figbert.com/</link>
        </image>
        ${posts.map(post => `
            <item>
                <title>${post.title}</title>
                <link>https://figbert.com/posts/${post.slug}</link>
                <description><![CDATA[${post.html}]]></description>
                <pubDate>${new Date(post.date.split("/")[2], post.date.split("/")[1] - 1, post.date.split("/")[0]).toUTCString()}</pubDate>
                <author>figbert@figbert.com</author>
            </item>
        `).join("\n")}
    </channel>
    <channel>
        <title>FIGBERT Projects</title>
        <link>https://figbert.com/projects/</link>
        <description>My portfolio and log of all the work I've done in the public sphere.</description>
        <category>Technology</category>
        <copyright>2020 FIGBERT. All rights reserved.</copyright>
        <language>en-us</language>
        <image>
            <url>https://figbert.com/favicon-32x32.png</url>
            <title>FIGBERT</title>
            <link>https://figbert.com/</link>
        </image>
        ${projects.map(project => `
            <item>
                <title>${project.title}</title>
                <link>https://figbert.com/projects/${project.slug}</link>
                <description><![CDATA[${project.html}]]></description>
                <pubDate>${new Date(project.date.split("/")[2], project.date.split("/")[1] - 1, project.date.split("/")[0]).toUTCString()}</pubDate>
                <author>figbert@figbert.com</author>
            </item>
        `).join("\n")}
    </channel>
</rss>
`;

export function get(req, res) {
	res.writeHead(200, {
		"Content-Type": "application/rss+xml"
	});
    res.end(render(postsJSON, projectsJSON));
}
