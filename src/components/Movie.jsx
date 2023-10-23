import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";
import { FaCalendarAlt, FaStar, FaBookOpen } from "react-icons/fa";
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from "mdb-react-ui-kit";

const Filme = () => {
  const { id } = useParams();
  const imagePath = "https://image.tmdb.org/t/p/original";
  const KEY = process.env.REACT_APP_KEY;

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Crie um array de URLs que você deseja buscar
    const urls = [
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY}&language=pt-BR`,
      `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`
    ];

    Promise.all(urls.map(url => fetch(url).then(response => response.json())))
      .then(data => {
        const [topRatedData, popularData] = data; // Separe as respostas para filmes mais bem avaliados e populares
        const topRatedMovies = topRatedData.results;
        const popularMovies = popularData.results;

        // Encontre o filme desejado com base no ID
        const selectedMovie = topRatedMovies.find(movie => movie.id == id) || popularMovies.find(movie => movie.id == id);

        // Defina o estado do filme
        setMovie(selectedMovie);
      })
      .catch(error => {
        console.error('Ocorreu um erro ao buscar os dados:', error);
      });
  }, [id, KEY]);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 mt-5">
      <MDBCard
        className="text-center"
        style={{ width: "70rem", height: "35rem" }}
      >
        <MDBRow className="g-0">
          <MDBCol md="4">
            <MDBCardImage
              className="img_movie, m-2"
              src={`${imagePath}${movie?.poster_path}`}
              alt="{movie?.title}"
              style={{
                height: "34rem",
                width: "23rem",
                objectFit: "cover",
                margin: "0",
              }}
            />
          </MDBCol>
          <MDBCol md="8">
            <MDBCardBody>
              <MDBCardTitle className="mb-5">
                <h2>{movie?.title}</h2>
              </MDBCardTitle>
              <MDBCardText className="text-justify mx-4">
                <h5 style={{ textAlign: "justify" }}>
                  <div>
                    <FaBookOpen className="text-muted" /> Descrição:
                  </div>
                  <div className="text-muted mt-2">{movie?.overview}</div>
                </h5>
              </MDBCardText>
              <div className="d-flex align-items-center mx-4">
                <h5 className="me-3">
                  <div className="text-start">
                    <FaCalendarAlt className="text-muted" /> Lançamento:
                  </div>
                  <div className="text-center text-muted mt-2">
                    {movie?.release_date}
                  </div>
                </h5>
                <div className="mx-3">
                  <hr />
                </div>
                <div className="ms-auto">
                  <h5>
                    <div className="text-start">
                      <FaStar className="text-muted"/> Avaliação:
                    </div>
                    <div className="text-center text-muted mt-2">
                      {movie?.vote_average} / 10.0
                    </div>
                  </h5>
                </div>
              </div>
              <Link to = "/"
                className="btn btn-dark"
                style={{
                  position: "absolute",
                  bottom: "10px",
                  right: "10px",
                }}
              >
                Voltar à tela inicial
              </Link>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </div>
  );
};

export default Filme;
