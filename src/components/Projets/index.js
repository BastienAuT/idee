import ProjetItem from './ProjetItem';
import proj from '../../proj.js';

import './styles.scss';

const Projets = () => (
  <div className='projets'>
    {
      proj.map(
        (projet) => <ProjetItem key={proj.id} {...projet}  />,
        )
      }
  </div>

);
console.log ('projet')


export default Projets;
