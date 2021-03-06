import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/SCESoc/makers-website.git', // Update to point to your repository
		user: {
			name: 'Dharshatharan Jayatharan Aronan', // update to use your name
			email: 'dharshatharan@gmail.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);