import React, { useRef, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import {
  Movie,
  MovieContainer,
  ScrollLeftButton,
  ScrollRightButton,
} from "../pages/home/style";

const CardFilme = () => {
  const imagePath = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([]);
  const [filmes, setFilmes] = useState([]);
  const KEY = process.env.REACT_APP_KEY;
  const movieContainerRef = useRef(null);
  const filmesContainerRef = useRef(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, [KEY]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        setFilmes(data.results);
      });
  }, [KEY]);

  const scrollLeft = () => {
    console.log("Scrolling left");
    if (movieContainerRef.current) {
      movieContainerRef.current.scrollLeft -= 400;
    }
  };

  const scrollRight = () => {
    console.log("Scrolling right");
    if (movieContainerRef.current) {
      movieContainerRef.current.scrollLeft += 400;
    }
  };

  const scrollLeftFilmes = () => {
    console.log("Scrolling left");
    if (filmesContainerRef.current) {
      filmesContainerRef.current.scrollLeft -= 400;
    }
  };

  const scrollRightFilmes = () => {
    console.log("Scrolling right");
    if (filmesContainerRef.current) {
      filmesContainerRef.current.scrollLeft += 400;
    }
  };

  return (
    <div>
      <div>
        <h2>Melhor avaliados:</h2>

        <Card
          style={{
            width: "100%",
            background: "transparent",
            position: "relative",
          }}
        >
          <ScrollLeftButton onClick={scrollLeft}>
            <Button
              variant="light"
              style={{
                height: "5rem",
                position: "absolute",
                left: 0,
                zIndex: 1,
              }}
            >
              {"<"}
            </Button>
          </ScrollLeftButton>
          <MovieContainer ref={movieContainerRef}>
            {filmes.map((movie) => (
              <Movie key={movie.id}>
                <Link to={`/${movie.id}`} className="text-decoration-none mt-4">
                  <Card.Img
                    variant="top"
                    src={`${imagePath}${movie.poster_path}`}
                    alt={movie.title}
                    style={{ width: "15rem" }}
                  />
                </Link>
              </Movie>
            ))}
          </MovieContainer>
          <ScrollRightButton onClick={scrollRight}>
            <Button
              variant="light"
              style={{
                height: "5rem",
                position: "absolute",
                left: 0,
                zIndex: 1,
              }}
            >
              {">"}
            </Button>
          </ScrollRightButton>
        </Card>
      </div>

      <div>
        <h2 className="mt-2">Mais assistidos:</h2>

        <Card
          style={{
            width: "100%",
            background: "transparent",
            position: "relative",
          }}
        >
          <ScrollLeftButton onClick={scrollLeftFilmes}>
            <Button
              variant="light"
              style={{
                height: "5rem",
                position: "absolute",
                left: 0,
                zIndex: 1,
              }}
            >
              {"<"}
            </Button>
          </ScrollLeftButton>
          <MovieContainer ref={filmesContainerRef}>
            {movies.map((movie) => (
              <Movie key={movie.id}>
                <Link to={`/${movie.id}`} className="text-decoration-none mt-4">
                  <Card.Img
                    variant="top"
                    src={`${imagePath}${movie.poster_path}`}
                    alt={movie.title}
                    style={{ width: "15rem" }}
                  />
                </Link>
              </Movie>
            ))}
          </MovieContainer>
          <ScrollRightButton onClick={scrollRightFilmes}>
            <Button
              variant="light"
              style={{
                height: "5rem",
                position: "absolute",
                left: 0,
                zIndex: 1,
              }}
            >
              {">"}
            </Button>
          </ScrollRightButton>
        </Card>
      </div>
    </div>
  );
};

export default CardFilme;
