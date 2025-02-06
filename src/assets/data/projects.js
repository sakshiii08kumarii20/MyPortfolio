import { v4 as uuidv4 } from 'uuid';
import PredixImg from '../images/trihub.png'
import CAPImg from '../images/Studio.png'
import ImgDetectionImg from '../images/CRUD.png'
import PortfolioImg from '../images/portfolio.png'


const projectList = [
  {
    id: uuidv4(),
    name: 'PredixDB',
    desc:
      'Developed a user-friendly application for real-time EV charging station discovery, queue tracking, and slot booking, featuring integrated payment options. Utilized HTML, CSS, JavaScript, Google Maps API, MySQL, Email.js and bootstrap for seamless functionality and user experience.',
    img: PredixImg,
    tech: ['django', 'html css', 'javascript', 'ai ml', 'python'],
    liveLink: 'https://sakshiii08kumarii20.github.io/TriChargeHub/',
    githubLink: 'https://github.com/sakshiii08kumarii20/TriChargeHub'
  },

  {
    id: uuidv4(),
    name: 'Web Portfolio',
    desc:
      'My Personal Portfolio, showing all necessary details for an Computer Science Student seeking for career opportunities and extend reach. ',
    img: PortfolioImg,
    tech: ['html css', 'javascript', 'react', 'nodejs'],
    liveLink: 'https://sakshiii08kumarii20.github.io/MyPortfolio',
    githubLink: 'https://github.com/sakshiii08kumarii20/MyPortfolio'
  },
  
  
  {
    id: uuidv4(),
    name: 'HealthCare CAP',
    desc:
      'Developed an interactive online portfolio for professional photography, highlighting weddings, candid, and traditional styles, using React, CSS, Node.js, Express,and MySQL, with Visual Studio and Git for development.',
    img: CAPImg,
    tech: ['django', 'html css', 'javascript', 'ai ml', 'python'],
    liveLink: 'https://mycap.herokuapp.com/',
    githubLink: 'https://github.com/sakshiii08kumarii20/reactwebsite'
  },
  {
    id: uuidv4(),
    name: 'Image Detection',
    desc:
      'Designed and developed a user-friendly CRUD application to manage database operations, leveraging React.js for dynamic UI, Bootstrap 5 for responsive design, and JSON for datahandling.',
    img: ImgDetectionImg,
    tech: ['ai ml', 'python'],
    liveLink: 'https://sakshiii08kumarii20.github.io/CRUD_OPERATION/',
    githubLink: 'https://github.com/sakshiii08kumarii20/CRUD_OPERATION'
  },
  
  
  
];

export default projectList;