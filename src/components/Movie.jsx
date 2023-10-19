import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";
import { FaCalendarAlt, FaStar, FaBookOpen } from "react-icons/fa";
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from "mdb-react-ui-kit";

const Filme = () => {

  const { id } = useParams();
  const imagePath = "https://image.tmdb.org/t/p/w500";

  const [movie, setMovie] = useState([]);
  const KEY = process.env.REACT_APP_KEY;
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        const res = data.results;
        let filme = res.find((key) => {
          return key.id == id;
        });
        setMovie(filme);
      });
  }, [id, KEY]);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <MDBCard
        className="text-center"
        style={{ width: "70rem", height: "35rem" }}
      >
        <MDBRow className="g-0">
          <MDBCol md="4">
            <MDBCardImage
              className="img_movie, m-2"
              src={`${imagePath}${movie.poster_path}`}
              alt="{movie.title}"
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
                <h2>{movie.title}</h2>
              </MDBCardTitle>
              <MDBCardText className="text-justify mx-4">
                <h5 style={{ textAlign: "justify" }}>
                  <div>
                    <FaBookOpen className="text-muted" /> Descrição:
                  </div>
                  <div className="text-muted mt-2">{movie.overview}</div>
                </h5>
              </MDBCardText>
              <div className="d-flex align-items-center mx-4">
                <h5 className="me-3">
                  <div className="text-start">
                    <FaCalendarAlt className="text-muted" /> Lançamento:
                  </div>
                  <div className="text-center text-muted mt-2">
                    {movie.release_date}
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
                      {movie.vote_average} / 10.0
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
