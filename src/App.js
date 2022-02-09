import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  /* [1,2] 1이 배열의 데이터, 2가 배열 데이터를 수정하는 함수 */
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image} />
              <h2>{movie.title}</h2>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres == null
                  ? ""
                  : movie.genres.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
