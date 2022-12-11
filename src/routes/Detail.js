import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <Link to="/">go home</Link>
      {loading ? (
        <h1>"Loading!!!!!!!"</h1>
      ) : (
        <div>
          <h1>{movie.title}</h1>
          <h2>{movie.year}</h2>
          <img src={movie.large_cover_image} alt={movie.id} />
          <ul>
            {movie.genres?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>{movie.description_intro}</p>
        </div>
      )}
    </div>
  );
};

export default Detail;

//https://yts.mx/api/v2/movie_details.json?movie_id=
