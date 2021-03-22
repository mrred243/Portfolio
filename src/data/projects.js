import pj1 from '../asset/pj1.jpg';
import pj2 from '../asset/pj2.jpg';
import pj3 from '../asset/pj3.jpg';
import pj4 from '../asset/pj4.jpg';
import pj5 from '../asset/pj5.jpg';
import pj6 from '../asset/alexas_fotos-1OEtbcV6qdo-unsplash.jpg'
import pj7 from '../asset/socialmedia.jpg';
import portfolio from '../asset/portfolio.jpg'



const PROJECTS = [
  {
    id: 1,
    title: 'Personal Portfolio',
    description: 'My portfolio website has been built by React. It was designed in Minimalist style. It has a responsive web design. You currently view this portfolio.',
    technology: 'React, CSS',
    link: 'https://github.com/mrred243/Portfolio',
    image: portfolio
  },
  {
    id: 2,
    title: 'Apo store',
    description: 'A e-commerce website. You can use this mockup credit card to make a test purchase (card number: 4242 4242 4242 4242, MM/YY: 04/24, CVC: 242, ZIP: 42424)',
    technology:'React, React Router, MaterialUI, Commersejs',
    link: 'https://apostore.netlify.app/',
    image: pj1
  },
  {
    id: 3,
    title: 'Odds or Evens',
    description: 'A card-guessing game on web with Dark theme',
    technology: 'React, Redux',
    link: 'https://oddorevengame.netlify.app/',
    image: pj4
  },
  {
    id: 4,
    title: 'Music Mobile App',
    description: 'Music Mobile App inspired by Spotify. It lets you search, play music and add your favorite artists to your list.',
    technology: 'React Native, third-party UI libraries',
    link: 'https://github.com/mrred243/Favorite-Artists-App',
    image: pj3
  },
  {
    id: 5,
    title: 'Spring Boot Web',
    description: 'A gym planner web  with Springboot backend. It authenticates users and shows contents based on user profile. Demo is hosted on Heroku. Default users: (user1: admin, password: admin), (user2: user, password: user).',
    technology: 'Java, Springboot, MariaDB',
    link: 'https://gymplanner243.herokuapp.com',
    image: pj2
  },
  {
    id: 6,
    title: 'APO Store (E-commerce)',
    description: 'An functional fashion e-commerce web store is made with WordPress and WooCommerce. SEO has been optimized',
    technology: 'WordPress, WooCommerce',
    link: 'https://www.apoplanet.ga/',
    image: pj6
  },

  {
    id: 7,
    title: 'Weather Forecast',
    description: 'Mobile app helps you find weather information of cities',
    technology: 'Flutter',
    link: 'https://github.com/mrred243/Flutter__WeatherForecast',
    image: pj5
  },
  {
    id: 8,
    title: 'Social Media Mobile App',
    description: 'A social media mobile app is inspired by Instagram. It uses Firebase as backend for authentication, data storage and database. It has still been under development.',
    technology: 'ReactNative, Firebase',
    link: 'https://github.com/mrred243/PhotoSocialMedia',
    image: pj7
  },
  


];
export default PROJECTS;
