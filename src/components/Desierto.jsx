import desierto from "../assets/img/desierto.jpg";
import PropTypes from "prop-types";
export const Desierto = ({ className }) => {
  return <img src={desierto} alt="Desierto" className={className} />;
};

Desierto.propTypes = {
  className: PropTypes.string,
};
