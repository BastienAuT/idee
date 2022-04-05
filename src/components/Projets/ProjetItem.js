import PropTypes from 'prop-types';

const ProjetItem = ({ label, id, url }) => {
  
  const htmlId = `${id}`;
  return (
    <div className="projets__card">
    <a className="projets__title" href={url} id={htmlId} title="lienversleprojet">{label} </a>
    </div>
  );
};

ProjetItem.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

export default ProjetItem;
