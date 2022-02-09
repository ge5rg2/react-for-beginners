import propTypes from "prop-types";

const Movie = ({ coverImage, title, summary, genres }) => {
  return (
    <div>
      <img src={coverImage} alt={title} />
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>{genres == null ? "" : genres.map((i) => <li key={i}>{i}</li>)}</ul>
    </div>
  );
};

Movie.propTypes = {
  coverImage: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
  /* genres는 배열이기 때문에 arrayOf를 넣어준다 */
};

export default Movie;
