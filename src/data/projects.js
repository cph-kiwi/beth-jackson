export const projects = [
	{
		id: "dining-dames",
		title: "Dining Dames",
		description: `I have a group of friends who get together periodically for dinner. We found WhatsApp wasn't quite working for us to organise our dinners, so I decided to make an app to handle our activities. Users can create dinner events, handle RSVPs, see an embedded Google Map of the location, and add a profile picture of themselves.`,
		technologies: [
			"HTML",
			"CSS",
			"JavaScript",
			"React",
			"TypeScript",
			"GitLab",
			"Vercel",
			"Supabase",
			"Resend",
			"Google Maps API",
		],
		links: [
			{
				text: "See the app in more detail on the project page.",
				url: "/projects/dining-dames",
			},
		],
		image:
			"https://github.com/cph-kiwi/cph-kiwi-images/blob/master/Screenshot%202025-05-28%20at%2014.28.42.png?raw=true",
		imageAlt: "screenshot of the Dining Dames website",
	},
	{
		id: "christmas-treasure-hunt",
		title: "Chirstmas Treasure Hunt",
		description: `I made a treasure hunt as a gift to my husband for Christmas 2024. When the user clicks on the coordinates, they are copied, and can be pasted into Google Maps. The the user can use the Get Directs function to get to the location. At that point, a text answer must be given to reveal the next coordinates. There is confetti at the end.`,
		technologies: [
			"HTML",
			"CSS",
			"JavaScript",
			"React",
			"TypeScript",
			"GitLab",
			"Vercel",
		],
		links: [
			{
				text: "Do the treasure hunt yourself!",
				url: "https://christmas-treasure-hunt.cph.kiwi/",
			},
		],
		image:
			"https://github.com/cph-kiwi/cph-kiwi-images/blob/master/Screenshot%202025-05-28%20at%2014.23.09.png?raw=true",
		imageAlt: "screenshot of the christmas treasure hunt website",
	},
	{
		id: "silvi",
		title: "Silvi",
		description: `I've been working at Silvi since April 2022 as a Frontend Software Developer. The app had been written in Vue.js by a consultancy before I started, and the current code base wasn't fit for purpose. We made the decision to rewrite the Frontend in React and TypeScript, using Redux for state management.

My role has been to build out the Frontend, and to work closely with the Backend team to ensure the app is fully functional.`,
		technologies: [
			"HTML",
			"CSS",
			"JavaScript",
			"React",
			"Vue.js",
			"Nuxt",
			"Vite",
			"TypeScript",
			"Material UI",
			"Tailwind",
			"Redux",
			"GitLab",
			"Prisma",
			"Figma",
		],
		links: [
			{
				text: "Visit the Silvi website to learn more about this literature review tool!",
				url: "https://www.silvi.ai/",
			},
		],
		image:
			"https://github.com/cph-kiwi/cph-kiwi-images/blob/master/Screenshot%202024-12-19%20at%2013.48.02.png?raw=true",
		imageAlt: "screenshot of the silvi website",
	},
	{
		id: "weather",
		title: "Weather app",
		description: `I wrote this weather app in React using TypeScript and Next.js. I wanted the app to load with the user's current location's weather already loaded, so I had to figure out how to access the location of the user. I also filled out the backend by creating a proxy server to hide the api key.`,
		technologies: [
			"HTML",
			"CSS",
			"JavaScript",
			"Git",
			"React",
			"TypeScript",
			"Next.js",
			"Styled-components",
			"Vercel",
		],
		links: [
			{
				text: "Visit the weather app and see the forecast for tomorrow!",
				url: "https://weather.cph.kiwi/",
			},
			{
				text: "View source.",
				url: "https://github.com/cph-kiwi/weather",
			},
		],
		image:
			"https://github.com/cph-kiwi/cph-kiwi-images/blob/master/Screenshot%202022-01-12%20at%2014.09.38.png?raw=true",
		imageAlt: "screenshot of the weather website",
	},
	{
		id: "guideit",
		title: "GuideIT",
		description: `I worked on this GuideIT website as part of my final group project with Hack Your Future. I implemented the quiz functionality. This was my first project working in collaboration with other developers.`,
		technologies: [
			"HTML",
			"CSS",
			"JavaScript",
			"Git",
			"React",
			"Storybook",
			"Heroku",
			"Knex",
			"Firebase",
			"NodeJs",
			"MySQL",
			"Express",
			"Swagger",
			"Figma",
		],
		links: [
			{
				text: "Visit the GuideIT website and take the quiz!",
				url: "https://guide-it-production.herokuapp.com/",
			},
			{
				text: "View source.",
				url: "https://github.com/HackYourFuture-CPH/Guide-IT",
			},
		],
		image:
			"https://github.com/cph-kiwi/cph-kiwi-images/blob/master/Screenshot%202021-12-14%20at%2013.49.49.png?raw=true",
		imageAlt: "screenshot of the GuideIT website",
	},
	{
		id: "meal-sharing",
		title: "Dinner Time",
		description: `This was my personal project from Hack Your Future. I developed the front end, then the database using SQL, and finally the routers.`,
		technologies: [
			"HTML",
			"CSS",
			"JavaScript",
			"Git",
			"React",
			"Heroku",
			"NodeJs",
			"Postman",
			"MySQL",
			"Express",
			"Knex",
		],
		links: [
			{
				text: "Visit Dinner Time!",
				url: "https://hyf-meal-sharing.herokuapp.com/",
			},
			{
				text: "View source.",
				url: "https://github.com/cph-kiwi/meal-sharing",
			},
		],
		image:
			"https://github.com/cph-kiwi/cph-kiwi-images/blob/master/Screenshot%202021-12-14%20at%2013.38.07.png?raw=true",
		imageAlt: "screenshot of Dinner Time",
	},
	{
		id: "drum-kit",
		title: "Drum Kit",
		description: `This project idea was undertaken as part of the javascript30 course by Wes Bos. I personalised it by adding a metronome.`,
		technologies: ["JavaScript", "HTML", "CSS", "Git", "Vercel"],
		links: [
			{
				text: "Visit the drum kit with metronome",
				url: "https://drum-kit.cph.kiwi/",
			},
			{
				text: "View source.",
				url: "https://github.com/cph-kiwi/personalised-drum-kit",
			},
		],
		image:
			"https://raw.githubusercontent.com/cph-kiwi/cph-kiwi-images/master/Screenshot%202020-09-07%20at%2013.52.53.png",
		imageAlt: "screenshot of the drum kit with metronome",
	},
	{
		id: "karen",
		title: "Karen Meier Rasmussen",
		description: `I created a personal webpage for a client. This webpage features a guestbook where visitors can leave a message.`,
		technologies: [
			"HTML",
			"CSS",
			"JavaScript",
			"Git",
			"React",
			"Vercel",
			"Firebase",
		],
		links: [
			{
				text: "Visit Karen Meier Rasmussen",
				url: "https://karenmeierrasmussen.dk/",
			},
			{
				text: "View source.",
				url: "https://github.com/cph-kiwi/karen",
			},
		],
		image:
			"https://raw.githubusercontent.com/cph-kiwi/cph-kiwi-images/master/Screenshot%202020-09-02%20at%2011.13.45.png",
		imageAlt: "screenshot of Karen Meier Rasmussens webpage",
	},
	{
		id: "andreas-enterprises",
		title: "Andreas Enterprises",
		description: `I created a personal webpage for a client. The client was keen to have a guestbook where visitors can leave a message so I used Firestore to set that up.`,
		technologies: [
			"HTML",
			"CSS",
			"JavaScript",
			"Git",
			"React",
			"Vercel",
			"Firebase",
		],
		links: [
			{
				text: "Visit Andreas Enterprises",
				url: "https://andreas.social/",
			},
			{
				text: "View source.",
				url: "https://github.com/cph-kiwi/andreas-moller",
			},
		],
		image:
			"https://raw.githubusercontent.com/cph-kiwi/cph-kiwi-images/master/Screenshot%202020-09-02%20at%2011.13.11.png",
		imageAlt: "screenshot of Andreas Enterprises webpage",
	},
	{
		id: "pig-latin",
		title: "Pig Latin Translator",
		description: `My first personal project. An app that translates from English into Pig Latin (a fun, pseudo-language, mostly used by children in play).`,
		technologies: ["HTML", "CSS", "JavaScript", "Git", "React", "Vercel"],
		links: [
			{
				text: "Visit Pig Latin Translator",
				url: "https://pig-latin.cph.kiwi/",
			},
			{
				text: "View source.",
				url: "https://github.com/cph-kiwi/pig-latin-translator",
			},
		],
		image:
			"https://raw.githubusercontent.com/cph-kiwi/cph-kiwi-images/master/Screenshot%202020-08-06%20at%2021.53.10.png",
		imageAlt: "screenshot of pig latin translator app",
	},
];
