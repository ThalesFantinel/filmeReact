import { Container, MovieList } from "./style";
import Navbare from "../../components/Navbar";
import CardFilme from "../../components/MovieCard";
import { FaRocket } from "react-icons/fa";


function Home() {
  return (
    <div>
    <Navbare />
    <Container>
      <h1>Bem vindo ao <FaRocket/>SpaceMovies</h1>
      <MovieList>
        <CardFilme />
      </MovieList>
    </Container>
    </div>
  );
}

export default Home;
