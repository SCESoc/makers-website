import fs from 'fs';
import dayjs from 'dayjs';
import { process } from '$lib/markdown';

/** @type {import('@sveltejs/kit').RequestHandler} */
export function get() {
	const projects = fs.readdirSync(`data/projects`)
		.filter(fileName => /.+\.md$/.test(fileName) && !/^template\.md$/.test(fileName))
		.map(fileName => {
			const { metadata } = process(`data/projects/${fileName}`);
			return {
				metadata,
				slug: fileName.slice(0, -3)
			};
		});
	// sort the projects by create startDate.
	projects.sort((a, b) => (dayjs(a.metadata.startDate, "MMM D, YYYY").diff(dayjs(b.metadata.startDate, "MMM D, YYYY"))));

	return {
		body: {
			projects
		}
	}
}