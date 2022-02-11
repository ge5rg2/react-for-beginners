import propTypes from "prop-types";
import { Link } from "react-router-dom";

const Movie = ({ year, id, coverImage, title, summary, genres }) => {
  return (
    <div>
      <img src={coverImage} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <h3>{year}</h3>
      <p>{summary}</p>
      <ul>{genres == null ? "" : genres.map((i) => <li key={i}>{i}</li>)}</ul>
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
