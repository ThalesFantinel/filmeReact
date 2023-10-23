import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Form, Nav, Navbar }from 'react-bootstrap';
import { FaRocket } from "react-icons/fa";

const Navbare = () => {

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/"><FaRocket />SpaceMovies</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Início</Nav.Link>
            
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              type="text"
              placeholder="Digite..."
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <Button type="submit" variant="outline-dark">
              Pesquisar
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbare;