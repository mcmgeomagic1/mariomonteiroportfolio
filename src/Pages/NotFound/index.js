import { Link } from "react-router-dom";
import { NotFoundSection } from "./styledNotFound.styled";
import { Button } from "../../Components/Button";

function NotFound() {
  return (
    <NotFoundSection>
      <h2>404 | Not Found</h2>
      <p>Ops, It seems like the page you are looking for doesn't exist</p>
      <Link to="/">
        <Button text="Go to home page" type="primary" />
      </Link>
    </NotFoundSection>
  );
}

export default NotFound;
