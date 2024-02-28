import { useState, useEffect } from "react";
import Hero from "../components/Hero";

const movieUrl = import.meta.env.VITE_MOVIEBOX_URL;

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(movieUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results.slice(0, 10));
      });
  }, []);

  const [firstFiveMovies, setFirstFiveMovies] = useState([]);

  useEffect(() => {
    fetch(movieUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFirstFiveMovies(data.results.slice(0, 5));
      });
  }, []);

  return (
   
            <Hero
              firstFiveMovies={firstFiveMovies}
              movies={movies}
              setFirstFiveMovies={setFirstFiveMovies}
              setMovies={setMovies}
            />
         
  );
};

export default Home;
