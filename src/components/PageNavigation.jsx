import { Link } from "react-router-dom";
import "../styles/PageNavigation.css";

function PageNavigation({ previous, next }) {
  return (
    <div className="page-navigation">

      {previous ? (
        <Link
          to={previous.path}
          className="page-nav-btn previous"
        >
          <span>←</span>
          <div>
            <small>Previous</small>
            <strong>{previous.name}</strong>
          </div>
        </Link>
      ) : (
        <div></div>
      )}


      {next ? (
        <Link
          to={next.path}
          className="page-nav-btn next"
        >
          <div>
            <small>Next</small>
            <strong>{next.name}</strong>
          </div>
          <span>→</span>
        </Link>
      ) : (
        <div></div>
      )}

    </div>
  );
}

export default PageNavigation;