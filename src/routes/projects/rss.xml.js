import projectsJSON from "./_projects.js";

const render = (projects) => `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
        <title>FIGBERT Projects</title>
        <link>https://figbert.com/projects/</link>
        <description>My portfolio and log of all the work I've done in the public sphere.</description>
        <category>Technology/Programming</category>
        <copyright>2020 FIGBERT. All rights reserved.</copyright>
        <atom:link href="http://figbert.com/projects/rss.xml" rel="self" type="application/rss+xml"/>
        <language>en-us</language>
        <image>
            <url>https://figbert.com/favicon-32x32.png</url>
            <title>FIGBERT Projects</title>
            <link>https://figbert.com/projects/</link>
        </image>
        ${projects.map(project => `
            <item>
                <title>${project.title}</title>
                <link>https://figbert.com/projects/${project.slug}</link>
                <guid>https://figbert.com/projects/${project.slug}</guid>
                <description><![CDATA[${project.html}]]></description>
                <pubDate>${new Date(project.date.split("/")[2], project.date.split("/")[1] - 1, project.date.split("/")[0]).toUTCString()}</pubDate>
                <author>figbert@figbert.com (FIGBERT)</author>
            </item>
        `).join("\n")}
    </channel>
</rss>
`;

export function get(req, res) {
    const content = render(projectsJSON);
	res.writeHead(200, {
		"Content-Type": "application/rss+xml"
	});
    res.end(content);
}
