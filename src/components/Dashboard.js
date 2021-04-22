import React from "react";
import Navbar from "../Layout/Navbar/Navbar";
import MovieList from "./MovieList/MovieList";

const exampleItem = {
  adult: false,
  backdrop_path: "/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",
  genre_ids: [28, 878],
  id: 399566,
  original_language: "en",
  original_title: "Godzilla vs. Kong",
  poster_path: "/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg",
  video: false,
  title: "Godzilla vs. Kong",
  overview:
    "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
  release_date: "2021-03-24",
  vote_count: 4552,
  vote_average: 8.3,
  popularity: 6065.197,
  media_type: "movie",
};

const Dashboard = (props) => {
  return (
    <div>
      <Navbar />
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-1 lg:px-4">
          <h1 className="text-3xl font-bold text-gray-900">My Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="grid grid-flow-row">
          <div className="flex max-w-7xl mx-auto py-6 sm:px-2 lg:px-4">
            <MovieList items={exampleItem} />
            {/*<!-- Add list of movies here -->*/}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
