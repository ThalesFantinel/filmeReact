import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Movie, MovieList } from "../pages/home/style";

const CardFilme = () => {
  const imagePath = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([]);
  const KEY = process.env.REACT_APP_KEY;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, [KEY]);

  return (
    <MovieList>
      {movies.map((movie) => (
        <Movie key={movie.id}>
          <Link to={`/${movie.id}`} className="text-decoration-none">
            <Card id="cardizinho" style={{ width: "12rem", height: "17.95rem"}}>
              <Card.Img
                variant="top"
                src={`${imagePath}${movie.poster_path}`}
                alt={movie.title}
                style={{ width: "11.9rem" }}
              />
            </Card>
          </Link>
        </Movie>
      ))}
    </MovieList>
  );
};

export default CardFilme;