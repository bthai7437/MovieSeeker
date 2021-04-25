import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import Dashboard from "./components/Dashboard";
import MovieList from "./components/MovieList/MovieList";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearch] = useState("");

  const getMovieRequest = async () => {
    const url = `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    setMovies(responseJson.results);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <div className="h-full">
      <Dashboard movies={movies} />
    </div>
  );
};

export default App;
