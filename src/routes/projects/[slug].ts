import { process } from '$lib/markdown';
import type { Project } from '$types/projects';

export function get({ params }) {
	const { slug } = params;

	const project: Project = process(`data/projects/${slug}.md`);

	return {
		body: {
			project
		}
	}
}