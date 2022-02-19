import fs from 'fs';
import dayjs from 'dayjs';
import { process } from '$lib/markdown';

/** @type {import('@sveltejs/kit').RequestHandler} */
export function get() {
	const projects = fs.readdirSync(`src/data/projects`)
		.filter(fileName => /.+\.md$/.test(fileName))
		.map(fileName => {
			const { metadata } = process(`src/data/projects/${fileName}`);
			return {
				metadata,
				slug: fileName.slice(0, -3)
			};
		});
	// sort the projects by create date.
	projects.sort((a, b) => (dayjs(a.metadata.date, "MMM D, YYYY").diff(dayjs(b.metadata.date, "MMM D, YYYY"))));

	return {
		body: {
			projects
		}
	}
}