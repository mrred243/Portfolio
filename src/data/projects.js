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
    description: 'My portfolio website has been built by React. It was designed in Minimalist style. You currently view this portfolio.',
    technology: 'React, CSS',
    link: 'https://github.com/mrred243/Portfolio',
    image: portfolio
  },
  {
    id: 2,
    title: 'Odd or Even',
    description: 'A card-guessing game on web with Dark theme',
    technology: 'React, Redux',
    link: 'https://oddorevengame.netlify.app/',
    image: pj4
  },
  {
    id: 3,
    title: 'Music Mobile App',
    description: 'Music Mobile App inspired by Spotify',
    technology: 'React Native, third-party libraries',
    link: 'https://github.com/mrred243/Favorite-Artists-App',
    image: pj3
  },
  {
    id: 4,
    title: 'Spring Boot Web',
    description: 'A gym planner web with Springboot backend.',
    technology: 'Java, Springboot, MariaDB',
    link: 'https://gymplanner243.herokuapp.com',
    image: pj2
  },
  {
    id: 5,
    title: 'APO Store (E-commerce)',
    description: 'An functional fashion e-commerce web store is made with WordPress and WooCommerce. SEO has been optimized',
    technology: 'WordPress, WooCommerce',
    link: 'http://www.apoplanet.ga/',
    image: pj6
  },

  {
    id: 6,
    title: 'Weather Forecast',
    description: 'Mobile app helps you find weather information of cities',
    technology: 'Flutter',
    link: 'https://github.com/mrred243/Flutter__WeatherForecast',
    image: pj5
  },
  {
    id: 7,
    title: 'Training Management Webpage',
    description: 'A web helps users manage their training schedule.',
    technology:'React, React Router',
    link: 'https://trainingweb.netlify.com/',
    image: pj1
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
