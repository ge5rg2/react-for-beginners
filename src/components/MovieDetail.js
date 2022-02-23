import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../css/MovieDetail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const MovieDetail = ({
  title,
  bkImage,
  longTitle,
  summary,
  rating,
  runtime,
  genres,
}) => {
  return (
    <div className={styles.detailMain}>
      <div className={styles.homeMain}>
        <h2>
          <Link className={styles.home} to={`/`}>
            <FontAwesomeIcon icon={faHouse} />
          </Link>
        </h2>
      </div>
      <h1 className={styles.detailTitle}>{longTitle}</h1>
      <div className={styles.detailImg}>
        <img alt={title} src={bkImage}></img>
      </div>
      <div className={styles.detailSummary}>
        <div>
          {summary.length > 290 ? `${summary.slice(0, 290)}...` : summary}
        </div>
        <h3>Rating: {rating} / 10</h3>
        <h4>Runtime: {runtime} min</h4>
      </div>
    </div>
  );
};

MovieDetail.propTypes = {
  bkImage: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  longTitle: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  rating: propTypes.number.isRequired,
  runtime: propTypes.number,
};

export default MovieDetail;
