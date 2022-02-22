export const menu = [
	{
		name: 'Home',
		path: '/',
		active: (url: string) => url === '/',
	},
	{
		name: 'Projects',
		path: '/projects',
		active: (url: string) => url.startsWith('/projects'),
	}
];