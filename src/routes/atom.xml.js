import postsJSON from "./posts/_posts.js";
import projectsJSON from "./projects/_projects.js";

const render = (posts, projects) => `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
	<title>FIGBERT Blog</title>
	<subtitle>My writeups, logs, posts, and general thoughts organized chronologically for your viewing pleasure.</subtitle>
	<link href="https://figbert.com/posts/" rel="self"/>
	<link href="http://figbert.com/"/>
	<id>https://figbert.com/posts/</id>
    <icon>https://figbert.com/favicon-32x32.png</icon>
    <rights>Copyright 2020 FIGBERT. All rights reserved.</rights>
    ${posts.map(post => `
        <entry>
            <title>${post.title}</title>
            <link href="https://figbert.com/posts/${post.slug}"/>
            <id>https://figbert.com/posts/${post.slug}</id>
            <summary>${post.preview}</summary>
            <content type="html">${post.html}</content>
            <author>
                <name>FIGBERT</name>
                <email>figbert@figbert.com</email>
            </author>
            <updated>${new Date(post.date.split("/")[2], post.date.split("/")[1] - 1, post.date.split("/")[0]).toUTCString()}</updated>
        </entry>
    `).join("\n")}
</feed>
<feed xmlns="http://www.w3.org/2005/Atom">
	<title>FIGBERT Projects</title>
	<subtitle>My portfolio and log of all the work I've done in the public sphere.</subtitle>
	<link href="https://figbert.com/projects/" rel="self"/>
    <link href="http://figbert.com/"/>
    <id>https://figbert.com/projects/</id>
    <updated>${new Date(projects[projects.length - 1].date.split("/")[2], projects[projects.length - 1].date.split("/")[1], projects[projects.length - 1].date.split("/")[0]).toUTCString()}</updated>
    <icon>https://figbert.com/favicon-32x32.png</icon>
    <rights>Copyright 2020 FIGBERT. All rights reserved.</rights>
    ${projects.map(project => `
        <entry>
            <title>${project.title}</title>
            <link href="https://figbert.com/projects/${project.slug}"/>
            <id>https://figbert.com/projects/${project.slug}<id/>
            <summary>${project.preview}</summary>
            <content type="html">${project.html}</content>
            <author>
                <name>FIGBERT</name>
                <email>figbert@figbert.com</email>
            </author>
            <updated>${new Date(project.date.split("/")[2], project.date.split("/")[1] - 1, project.date.split("/")[0]).toUTCString()}</updated>
        </entry>
    `).join("\n")}
</feed>
`;

export function get(req, res) {
    const content = render(postsJSON, projectsJSON);
	res.writeHead(200, {
		"Content-Type": "application/atom+xml"
	});
    res.end(content);
}
