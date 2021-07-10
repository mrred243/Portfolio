import apoStore from '../asset/pj1.jpg';
import gymPlanner from '../asset/gymPlanner.jpg';
import music from '../asset/music.jpg';
import oddEven from '../asset/oddEven.jpg';
import weather from '../asset/weather.jpg';
import travelAgency from '../asset/travel-agency.jpeg';
import socialMedia from '../asset/socialmedia.jpg';
import portfolio from '../asset/portfolio.jpg';
import destination from '../asset/destination.jpeg';
import patient from '../asset/patient.jpg';
import library from '../asset/library.jpg';

const PROJECTS = [
	{
		id: 1,
		title: 'Social Media For Travellers',
		description:
			'This A Full Stack MERN App The App.It allows users to post interesting destinations and interact with posts of others. It authenticates users with Google account and JSON Web Token.',
		test: 'user: 1@gmail.com, pwd: 123123',
		technology:
			'React, Redux, Node.Js, Express, MongoDB, React Hook, JWT, Google Authentication, REST API',
		demoURL: 'https://destination4everyone.netlify.app',
		repoURL: [
			'https://github.com/mrred243/Destination-Social-Medie-Web-App-',
			'https://github.com/mrred243/Destination-API',
		],
		image: destination,
	},
	{
		id: 2,
		title: 'Apo store',
		description:
			'An e-commerce website is working with Commerce.js. The visual is optimized with Material-UI.  ',
		test: 'Card No: 4242 4242 4242 4242, MM/YY: 04/24, CVC: 242, ZIP: 42424',
		technology:
			'React, React Router, MaterialUI, Commerce.js, Stripe, React Hooks',
		demoURL: 'https://apostore.netlify.app/',
		repoURL: ['https://github.com/mrred243/E-commerce-website'],
		image: apoStore,
	},
	{
		id: 3,
		title: 'Travel Agency ',
		description: 'Landing page for a modern travel agency ',
		technology: 'Webflow, Figma',
		demoURL: 'https://travelwithapo.webflow.io/',
		image: travelAgency,
	},
	{
		id: 4,
		title: 'Patient Managing System ',
		description: 'This is Fullstack app which is coded in TypeScript.',
		technology:
			'TypeScript, React, Node.js, React Hooks for State Management, REST API',
		repoURL: [
			'https://github.com/mrred243/Patient-FrontEnd',
			'https://github.com/mrred243/Patientor-Backend',
		],
		image: patient,
	},
	{
		id: 5,
		title: 'Odds or Evens',
		description:
			'A card-guessing web game. Players compete with others to break the high score.',
		technology: 'React, Redux, REST API',
		demoURL: 'https://oddorevengame.netlify.app/',
		repoURL: ['https://github.com/mrred243/odd-or-even'],
		image: oddEven,
	},
	{
		id: 6,
		title: 'Library App',
		description:
			'An app controls books in library. GraphQL is used to be a connection between front end and back end. Besides, It has authentication feature with JWT.',
		technology: 'GraphQL, React, Node.js, MongoDB, JWT ',
		repoURL: [
			'https://github.com/mrred243/Library-BackEnd_GraphQL',
			'https://github.com/mrred243/Library-FrontEnd__GraphQL',
		],
		image: library,
	},
	{
		id: 7,
		title: 'Music Mobile App',
		description:
			'Music Mobile App inspired by Spotify. You can search, listen to music and add your favorite artists to your list.',
		technology: 'React Native, third-party UI libraries',
		repoURL: ['https://github.com/mrred243/Favorite-Artists-App'],
		image: music,
	},
	{
		id: 8,
		title: 'Personal Portfolio',
		description:
			'My portfolio website has been built by React. It was designed in Minimalist style. It has a responsive web design. You currently view this portfolio.',
		technology: 'React, CSS',
		demoURL: 'https://thienan.netlify.app',
		repoURL: ['https://github.com/mrred243/Portfolio'],
		image: portfolio,
	},
	{
		id: 9,
		title: 'Gym Planner',
		description:
			'A gym planner web  with Springboot backend. It authenticates users and shows contents based on user profile (user1: admin, password: admin; user2: user, password: user).',
		technology: 'Java, Springboot, MariaDB',
		demoURL: 'https://gymplanner243.herokuapp.com',
		repoURL: ['https://github.com/mrred243/Gym-Planner'],
		image: gymPlanner,
	},
	{
		id: 10,
		title: 'Weather Forecast',
		description:
			'This is a mobile app allowing you to find weather information of cities around the world.',
		technology: 'Flutter, Dart',
		repoURL: ['https://github.com/mrred243/Flutter__WeatherForecast'],
		image: weather,
	},
	{
		id: 11,
		title: 'Social Media Mobile App',
		description:
			'A social media mobile app is inspired by Instagram. It uses Firebase as backend for authentication, data storage and database. It has been still under development.',
		technology: 'ReactNative, Firebase',
		repoURL: ['https://github.com/mrred243/PhotoSocialMedia'],
		image: socialMedia,
	},
];
export default PROJECTS;
