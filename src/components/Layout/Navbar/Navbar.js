import React from "react";

const Navbar = (props) => {
  return (
    <nav className="bg-gray-800">
      <div className="flex flex-col md:flex-row md:space-x-6 py-4 px-4 text-lg">
        <button
          className="flex-initial text-gray-300 hover:bg-gray-500 px-3 py-2 rounded "
          onClick={() =>
            props.categoryClick(
              "Trending",
              `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`
            )
          }
        >
          Trending
        </button>

        <button
          className="flex-initial text-gray-300 hover:bg-gray-500 px-3 py-2 rounded "
          onClick={() =>
            props.categoryClick(
              "Recently Released",
              `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=release_date.desc`
            )
          }
        >
          Recently Released
        </button>

        <button
          className="flex-initial text-gray-300 hover:bg-gray-500 px-3 py-2 rounded "
          onClick={() =>
            props.categoryClick(
              "Movies",
              `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=sort_by=revenue.asc`
            )
          }
        >
          Movies
        </button>

        <button
          className="flex-initial text-gray-300 hover:bg-gray-500 px-3 py-2 rounded "
          onClick={() =>
            props.categoryClick(
              "TV Shows",
              `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
            )
          }
        >
          TV Shows
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
