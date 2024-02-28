import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from "./Navbar";
// import imdb from "../assets/IMDB.png";
import Featured from "./Featured";
import Footer from "../components/Footer";
// import Play from "../assets/Play.png";

const imgUrl = import.meta.env.VITE_MOVIEBOX_IMG;

const CAROUSEL_DELAY = 3000;

const Hero = ({ firstFiveMovies, setMovies, movies }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % firstFiveMovies.length);
    }, CAROUSEL_DELAY);

    return () => {
      clearInterval(intervalId);
    };
  }, [firstFiveMovies]);

  return (
    <div className="xx:px-0 sm:px-0">
      <Navbar setMovies={setMovies} />
      <div className="relative w-full  xx:py-3 sm:py-0 ">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={CAROUSEL_DELAY}
          emulateTouch={true}
          swipeable={false}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          showArrows={true}
          selectedItem={currentSlide}
          onChange={(index) => setCurrentSlide(index)}
        >
          {firstFiveMovies.map((movieReq) => (
            <div key={movieReq.id} className="w-full ">
              <div className="h-[500px] mt-16">
                <img
                  src={imgUrl + movieReq.poster_path}
                  alt={movieReq.title}
                  className="object-fit w-[500px] h-[500px]"
                />
              </div>

              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-left xx:px-10 sm:px-10">
                <div className="text-white text-left xx:w-[500px] sm:w-[400px] xx:pt-24 sm:pt-16">
                  <h1 className="xx:text-2xl sm:text-3xl font-bold xx:py-4  sm:py-2">
                    {movieReq.title}
                  </h1>
                  <div className="flex flex-row">
                    <div className="flex flex-row py-2">
                      {/* <div>
                        <img src={imdb} alt="img" className="w-4 mt-0.5 h-6" />
                      </div> */}

                      <h6 className="px-2 w-[110px]">
                        {movieReq.vote_average} / 10
                      </h6>
                    </div>
                  </div>
                  <p className="text-sm py-2">{movieReq.overview}</p>
              
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <Featured movies={movies} setMovies={setMovies} />

      <Footer />
    </div>
  );
};

Hero.propTypes = {
  firstFiveMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
    })
  ).isRequired,

  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
    })
  ).isRequired,

  setMovies: PropTypes.func.isRequired,
};

export default Hero;
