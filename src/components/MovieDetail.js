import propTypes from "prop-types";
import { Link } from "react-router-dom";

const MovieDetail = ({
  title,
  bkImage,
  longTitle,
  summary,
  rating,
  runtime,
}) => {
  return (
    <div>
      <div>
        <h2>
          <Link to={`/`}>Home</Link>
        </h2>
      </div>
      <img alt={title} src={bkImage}></img>
      <h1>{longTitle}</h1>
      <p>{summary}</p>
      <div>Rating : {rating}/10</div>
      <div>Runtime : {runtime}min</div>
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
