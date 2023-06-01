const education = {
	formal: {
		headlineMain: 'Degrees',
		headlineSub: '',
		schools: [
			{
				name: 'Manhattan School of Music',
				degree: 'Bachelor of Music - Classical Guitar',
				location: 'New York City',
			},
			{
				name: 'Georgetown University Law Center',
				degree: 'Juris Doctor',
				location: 'Washington, D.C.',
			},
			{
				name: 'New York University School of Law',
				degree: 'LL.M - Taxation',
				location: 'New York City',
			},
		],
	},
	other: {
		headlineMain: 'Other',
		headlineSub: '',
		courses: [
			{
				provider: 'General Assembly',
				name: 'Web Development Immersive',
				startDate: 'November 2014',
				endDate: 'February 2015',
				location: 'Seattle, WA',
				description:
					'<p>Full-time immersive coding boot camp, building web apps using MEAN stack and Ruby/Rails framework. Devoted approximately 80 to 90+ hours per week, including class sessions, homework, and building full-scale web applications. Graduated with extensive experience in designing and building web apps from front-end design to server-side/database.</p>',
			},
			{
				provider: 'Harvard University/edX',
				name: 'CS50 - Introduction to Computer Science',
				startDate: null,
				endDate: 'May 2015',
				location: 'Online',
				description:
					'<p>Harvard’s gateway computer science course. Although considered one of the most rigorous undergraduate courses at Harvard, it has proved so popular that in 2015 it was adopted by Yale as its introductory computer science course, via lectures streamed from the Harvard campus!</p><p>The first two-thirds of this twelve-week course are implemented in C, followed by sections addressing the Internet, web applications, and computer security, utilizing PHP, JavaScript, SQL, and other common web languages/frameworks. Graded assignments consist of nine problem sets plus a final project. Topics covered include: C syntax and programming structures; debugging techniques, particularly use of the gdb debugging tool; analysis and implementation of algorithms, with a focus on asymptoptic run times of common searching and sorting algorithms; data structures, including arrays, trees, tries, hash tables, linked lists, queues, and stacks; memory allocation and management, including use of pointers, heap, and stack memory; and file input/output, both dynamically and at the command line.</p>',
			},
			{
				provider: 'Code Fellows',
				name: 'Foundations II: Javascript',
				startDate: null,
				endDate: 'October 2014',
				location: 'Seattle, WA',
				description:
					'<p>Survey of the fundamentals of JavaScript, including basics of functional, asynchronous programming, object-oriented JavaScript concepts, AJAX/JSON, use of libraries such as Lodash, Underscore, jQuery, use of Git/GitHub.</p>',
			},
		],
	},
	courses: {
		providers: ['Stanford University', 'Udemy', 'egghead.io', 'Treehouse'],
		introText:
			'Below is a partial listing of relevant self-study onliine courses I have completed over the last several years. In addition to title, courses are identified by the year of completion. Unless otherwise noted, these courses were offered online, through distribution channels such as Udemy, Egghead.io, Treehouse.',
		courseNames: [
			'ChatGPT - The Complete Guide to ChatGPT & OpenAI APIs (In Progress)',
			'Next.js & React - The Complete Guide (2022)',
			'GitHub Actions - The Complete Guide (2023)',
			'React Testing Library and Jest: The Complete Guide (2023)',
			'React Native - The Practical Guide (2022)',
			'iOS & Swift - The Complete iOS App Dev Camp (2021)',
			'Master iOS Auto Layout (Udemy - 2021)',
			'CS193p - Developing Apps for iOS (using SwiftUI) (Stanford - 2021)',
			'Docker for DevOps (2017)',
			'Docker Technologies for DevOps and Developers (2017)',
			'React Native with Redux (2017)',
			'Advanced React and Redux (2017)',
			'Build Web Apps with React and Flux(2015)',
			"The Complete Developer's Guide to MongoDB (2016)",
			'Complete Guide to Angular 4 (2016)',
			"Webpack2: The Complete Developer's Guide (2016)",
			"ES6 JavaScript: The Complete Developer's Guide (2015)",
			'NodeJS Basics (2017)',
			'NodeJS Codeless API Creation: Up and Running with Swagger (2017)',
			'Use D3 to Build Interactive Charts with JavaScript (2015)',
			'Git Basics (2014)',
			'HTML / HTML Tables / HTML Forms (2015)',
			'CSS Basics (2014)',
			'CSS - Beyond the Basics (2014)',
			'Ruby Basics (2014)',
			'Java Basics (2014)',
			'AJAX Basics (2014)',
			'NodeJS Basics (2014)',
			'Understanding “this” in JavaScript (2014)',
		],
	},
};

export default education;
