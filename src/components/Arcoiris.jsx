import arcoiris from "../assets/img/arcoiris.jpg";
import PropTypes from "prop-types";

export const Arcoiris = ({ className }) => {
  return <img src={arcoiris} alt="Arcoiris" className={className} />;
};

Arcoiris.propTypes = {
  className: PropTypes.string,
};
