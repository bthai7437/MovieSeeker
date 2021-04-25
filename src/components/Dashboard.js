import React from "react";
import { Route } from "react-router";
import Navbar from "../Layout/Navbar/Navbar";
import MovieList from "./MovieList/MovieList";

const Dashboard = (props) => {
  return (
    <div>
      <Navbar />
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-1 lg:px-4">
          <h1 className="text-3xl font-bold text-gray-900">My Dashboard</h1>
        </div>
      </header>

      <div className="h-full">
        <div>
          <MovieList movies={props.movies} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
