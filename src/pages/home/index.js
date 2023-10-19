import { useEffect, useState } from "react";
import { Container, MovieList } from "./style";
import Navbare from "../../components/Navbar";
import CardFilme from "../../components/MovieCard";

function Home() {
  const [setMovies] = useState([]);
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
    <div>
    <Navbare />
    <Container>
      <h1>Bem vindo ao SpaceMovies</h1>
      <MovieList>
        <CardFilme />
      </MovieList>
    </Container>
    </div>
  );
}

export default Home;
