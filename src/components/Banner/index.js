import './styles.scss';
import bastien1 from './bastien1.jpg';

const Banner = () => (
  <div className="banner">
    <img className="banner__image" src={bastien1} alt="autreimagedeBastien"></img>
    <div className='banner__text'>
    <span className='banner__span-1'>Hello moi c'est Bastien Autem</span>
    <span className='banner__span-2'>Bienvenue sur mon portfolio</span>

    </div>
  </div>
);

export default Banner;
