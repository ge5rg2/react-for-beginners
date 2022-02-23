import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "../css/Movie.module.css";

const Home = () => {
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
        <div className={styles.loading}></div>
      ) : (
        <div className={styles.body}>
          {movies.map((movie) =>
            movie.year >= 2021 ? (
              ""
            ) : (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImage={movie.medium_cover_image}
                title={movie.title}
                year={movie.year}
                summary={movie.summary}
                genres={movie.genres}
              />
            )
          )}
        </div> /* 2022년 최신 영화는 적은 평가점수에도 순위에 올라와 있어서 2018년 기준으로함 */
      )}
    </div>
  );
};

export default Home;
