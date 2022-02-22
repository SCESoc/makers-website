import fs from 'fs';
import dayjs from 'dayjs';
import { process } from '$lib/markdown';

/** @type {import('@sveltejs/kit').RequestHandler} */
export function get() {
	let count = 0;
	const projects = fs.readdirSync(`data/projects`)
		.filter(fileName => {
			if (count < 3) {
				count += 1;
				return /.+\.md$/.test(fileName) && !/^template\.md$/.test(fileName)
			}
			return false;
		})
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