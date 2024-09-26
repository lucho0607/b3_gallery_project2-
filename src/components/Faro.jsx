import faro from "../assets/img/faro.jpg";
import PropTypes from "prop-types";
export const Faro = ({ className }) => {
  return <img src={faro} alt="Faro" className={className} />;
};

Faro.propTypes = {
  className: PropTypes.string,
};
