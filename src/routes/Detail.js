import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const { id } = useParams();
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log([json.data.movie]);
    /* 그냥 json.data.movie로 하면 object이기 때문에 map함수가 적용안됨. map은 arrary에서 적용 */
    setMovies([json.data.movie]);
    setLoading(false);
  }, [id]);
  useEffect(() => {
    getMovie();
  }, [getMovie]);
  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      {movies.map((movie) => (
        <MovieDetail
          key={movie.id}
          title={movie.title}
          bkImage={movie.background_image_original}
          longTitle={movie.title_long}
          summary={movie.description_full}
          rating={movie.rating}
          runtime={movie.runtime}
        />
      ))}
    </div>
  );
};

export default Detail;
