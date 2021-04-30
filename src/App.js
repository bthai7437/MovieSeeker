import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Layout/Navbar/Navbar";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearch] = useState("");
  const [category, setCategory] = useState("Trending");
  const [url, setURL] = useState(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`
  );

  const getMovieRequest = async () => {
    const response = await fetch(url);
    const responseJson = await response.json();
    setMovies(responseJson.results);
  };

  const handleCategoryClick = (nextCategory, nextURL) => {
    setCategory(nextCategory);
    setURL(nextURL);
  };

  useEffect(() => {
    getMovieRequest();
  }, [category]);

  return (
    <div className="h-full">
      <Navbar categoryClick={handleCategoryClick} />
      <Dashboard movies={movies} category={category} />
    </div>
  );
};

export default App;
