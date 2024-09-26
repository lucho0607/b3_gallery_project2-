import cascada from "../assets/img/cascada.jpg";
import PropTypes from "prop-types";
export const Cascada = ({ className }) => {
  return <img src={cascada} alt="Cascada" className={className} />;
};

Cascada.propTypes = {
  className: PropTypes.string,
};
