import projects from "./_projects.js";

const lookup = new Map();
projects.forEach(projects => {
	lookup.set(projects.slug, JSON.stringify(projects));
});

export function get(req, res, next) {
	const { slug } = req.params;

	if (lookup.has(slug)) {
		res.writeHead(200, {
			"Content-Type": "application/json"
		});

		res.end(lookup.get(slug));
	} else {
		res.writeHead(404, {
			"Content-Type": "application/json"
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}
