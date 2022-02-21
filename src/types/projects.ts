import type { Maker } from "./maker";
import type { ConnectLink } from "./connectLink";
import type { Technology } from "./technology";

export type Project = {
	metadata: {
		title: string;
		startDate: string;
		description: string;
		bannerImage?: string;
		logo?: string;
		makers: Maker[];
		lookingForCollaborators?: boolean;
		active?: boolean;
		technologies?: Technology[];
		connectLinks?: ConnectLink[];
		tags?: string[];
	},
	content: string;
	slug?: string;
}