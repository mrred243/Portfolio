import pj1 from '../asset/pj1.jpg';
import pj2 from '../asset/pj2.jpg';
import pj3 from '../asset/pj3.jpg';
import pj4 from '../asset/pj4.jpg';

const PROJECTS = [{
    id: 1,
    title: 'Training Management Webpage',
    description: 'A web allows users to review, manage their training schedule.',
    technology:'React, React Router',
    link: 'https://trainingweb.netlify.com/',
    image: pj1
  },
  {
    id: 2,
    title: 'Spring Boot web',
    description: 'A gym planner web with Springboot backend (username: admin, pw: admin)',
    technology: 'Java, Springboot, MariaDB, Bootstrap',
    link: 'https://gymplanner243.herokuapp.com',
    image: pj2
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
    title: 'Odd or Even',
    description: 'A card game on web which was build by React and Redux',
    technology: 'React, Redux',
    link: 'https://oddorevengame.netlify.app/',
    image: pj4
  }
];
export default PROJECTS;
