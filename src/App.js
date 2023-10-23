import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Movie from "./pages/movie";
import Search from "./pages/search";


const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/:id" exact element={<Movie />} />
                <Route path="/search" exact element={<Search />} />
            </Routes>
        </div>
    );
};

export default App;
