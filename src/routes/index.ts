import fs from 'fs';
import { process } from '$lib/markdown';

const featuredProjects = [
	"knowledge-base",
]

/** @type {import('@sveltejs/kit').RequestHandler} */
export function get() {
	const projects = fs.readdirSync(`data/projects`)
		.filter(fileName => /.+\.md$/.test(fileName) && featuredProjects.includes(fileName.replace(/\.md$/, '')))
		.map(fileName => {
			const { metadata } = process(`data/projects/${fileName}`);
			return {
				metadata,
				slug: fileName.slice(0, -3)
			};
		});

	return {
		body: {
			projects
		}
	}
}