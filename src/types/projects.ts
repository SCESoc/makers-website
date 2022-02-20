import type { Maker } from "./maker";
import type { Technology } from "./technology";

export type Project = {
	metadata: {
		title: string;
		startDate: string;
		description: string;
		bannerImage?: string;
		makers: Maker[];
		url?: string;
		contactEmail?: string;
		lookingForCollaborators?: boolean;
		active?: boolean;
		technologies?: Technology[];
		tags?: string[];
	},
	content: string;
	slug?: string;
}