import type { Metadata, Site } from "@types";

export const SITE: Site = {
	NAME: 'Albert Manuel',
	EMAIL: 'albertmanuels10@gmail.com',
}

export const HOME: Metadata = {
	TITLE: "Home",
	DESCRIPTION: "I am a software engineer working with JavaScript on Web Platform"
}

export const BLOG: Metadata = {
		TITLE: 'Blog',
		DESCRIPTION: 'My Blog space'
}

export const ABOUT: Metadata = {
	TITLE: 'About',
	DESCRIPTION: 'A short about me'
} 

export const navbarList = [
	{
		name: "Home",
		path: "/",
	},
	{
		name: "Blog",
		path: "/blog",
	},
	// {
	// 	name: "About",
	// 	path: "/about",
	// },
];

export const socialMedia = [
	{
		name: "linkedin",
		link: "https://linkedin.com/in/albertmanuels",
	},
	{
		name: "github",
		link: "https://github.com/albertmanuels",
	},
];