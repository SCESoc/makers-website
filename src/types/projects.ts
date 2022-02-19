export type Project = {
	metadata: {
		title: string;
		date: string;
		description: string;
	},
	content: string,
	slug?: string;
}