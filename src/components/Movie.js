import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../css/Movie.module.css";

const Movie = ({ year, id, coverImage, title, summary, genres }) => {
  return (
    <div className={styles.main}>
      <div className={styles.poster}>
        <img src={coverImage} alt={title} />
      </div>
      <div className={styles.text}>
        <h2>
          <Link to={`/movie/${id}`} className={styles.title}>
            {title}
          </Link>
        </h2>
        <h3>{year}</h3>
        <p className={styles.summary}>{summary}</p>
        <ul>{genres == null ? "" : genres.map((i) => <li key={i}>{i}</li>)}</ul>
      </div>
    </div>
  );
};

Movie.propTypes = {
  id: propTypes.number.isRequired,
  coverImage: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
  /* genres는 배열이기 때문에 arrayOf를 넣어준다 */
};

export default Movie;
