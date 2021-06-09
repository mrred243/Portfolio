import apoStore from '../asset/pj1.jpg';
import gymPlanner from '../asset/gymPlanner.jpg';
import music from '../asset/music.jpg';
import oddEven from '../asset/oddEven.jpg';
import weather from '../asset/weather.jpg';
import shop2 from '../asset/shop2.jpg';
import socialMedia from '../asset/socialmedia.jpg';
import portfolio from '../asset/portfolio.jpg';
import destination from '../asset/destination.jpeg';

const PROJECTS = [
	{
		id: 1,
		title: 'Social Media For Travellers',
		description:
			'This A Full Stack MERN App The App.It allows users to post interesting destinations and interact with posts of others. It has Google and backend authentication.(test user: 1@gmail.com, pw: 123123',
		technology: 'React, Redux, Node.Js, Express, MongoDB',
		link: 'https://destination4everyone.netlify.app',
		image: destination,
	},
	{
		id: 2,
		title: 'Personal Portfolio',
		description:
			'My portfolio website has been built by React. It was designed in Minimalist style. It has a responsive web design. You currently view this portfolio.',
		technology: 'React, CSS',
		link: 'https://github.com/mrred243/Portfolio',
		image: portfolio,
	},
	{
		id: 3,
		title: 'Apo store',
		description:
			'An e-commerce website. Use this mockup credit card (card No: 4242 4242 4242 4242, MM/YY: 04/24, CVC: 242, ZIP: 42424) to make a test purchase.',
		technology: 'React, React Router, MaterialUI, Commersejs',
		link: 'https://apostore.netlify.app/',
		image: apoStore,
	},
	{
		id: 4,
		title: 'Odds or Evens',
		description:
			'A card-guessing web game. Players compete with others to break the high score.',
		technology: 'React, Redux',
		link: 'https://oddorevengame.netlify.app/',
		image: oddEven,
	},
	{
		id: 5,
		title: 'Music Mobile App',
		description:
			'Music Mobile App inspired by Spotify. You can search, listen to music and add your favorite artists to your list.',
		technology: 'React Native, third-party UI libraries',
		link: 'https://github.com/mrred243/Favorite-Artists-App',
		image: music,
	},
	{
		id: 6,
		title: 'Gym Planner',
		description:
			'A gym planner web  with Springboot backend. It authenticates users and shows contents based on user profile (user1: admin, password: admin; user2: user, password: user).',
		technology: 'Java, Springboot, MariaDB',
		link: 'https://gymplanner243.herokuapp.com',
		image: gymPlanner,
	},
	{
		id: 7,
		title: 'WordPress Store ',
		description:
			'A functional fashion e-commerce web store is made with WordPress and WooCommerce. SEO has been optimized.',
		technology: 'WordPress, WooCommerce',
		link: 'https://www.apoplanet.ga/',
		image: shop2,
	},

	{
		id: 8,
		title: 'Weather Forecast',
		description:
			'This is a mobile app allowing you to find weather information of cities around the world.',
		technology: 'Flutter, Dart',
		link: 'https://github.com/mrred243/Flutter__WeatherForecast',
		image: weather,
	},
	{
		id: 9,
		title: 'Social Media Mobile App',
		description:
			'A social media mobile app is inspired by Instagram. It uses Firebase as backend for authentication, data storage and database. It has been still under development.',
		technology: 'ReactNative, Firebase',
		link: 'https://github.com/mrred243/PhotoSocialMedia',
		image: socialMedia,
	},
];
export default PROJECTS;
