import desierto2 from "../assets/img/desierto2.jpg";
import PropTypes from "prop-types";
export const Desierto2 = ({ className }) => {
  return <img src={desierto2} alt="Desierto2" className={className} />;
};

Desierto2.propTypes = {
  className: PropTypes.string,
};
