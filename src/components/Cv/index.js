import './styles.scss';
import cv from "./cv.png";

const Cv = () => (
  <div className="cv">
    <img className="cv__image" src={cv} alt="cvdebastien"></img>
  </div>
);

export default Cv;
