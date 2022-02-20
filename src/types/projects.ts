import type { Maker } from "./maker";

export type Project = {
	metadata: {
		title: string;
		startDate: string;
		endDate?: string;
		description: string;
		bannerImage?: string;
		makers: Maker[];
		url?: string;
		contactEmail?: string;
		lookingForCollaborators?: boolean
		active?: boolean
	},
	content: string,
	slug?: string;
}