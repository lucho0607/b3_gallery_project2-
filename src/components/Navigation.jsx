import { Link } from "react-router-dom";
import { Arcoiris } from "./arcoiris";
import { Cascada } from "./Cascada";
import { Desierto } from "./Desierto";
import { Desierto2 } from "./Desierto2";
import { Faro } from "./Faro";

export const Navigation = () => {
  return (
    <div className="container thumbnail-container my-2">
      <Link to="/arcoiris" className="links">
        <figure className="thumbnail-image-size">
          <Arcoiris />
          <figcaption>Arcoiris</figcaption>
        </figure>
      </Link>
      <Link to="/cascada" className="links">
        <figure className="thumbnail-image-size">
          <Cascada />
          <figcaption>Cascada</figcaption>
        </figure>
      </Link>
      <Link to="/desierto" className="links">
        <figure className="thumbnail-image-size">
          <Desierto />
          <figcaption>Desierto</figcaption>
        </figure>
      </Link>
      <Link to="/desierto2" className="links">
        <figure className="thumbnail-image-size">
          <Desierto2 />
          <figcaption>Desierto2</figcaption>
        </figure>
      </Link>
      <Link to="/faro" className="links">
        <figure className="thumbnail-image-size">
          <Faro />
          <figcaption>Faro</figcaption>
        </figure>
      </Link>
    </div>
  );
};
