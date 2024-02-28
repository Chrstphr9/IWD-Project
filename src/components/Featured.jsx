import PropTypes from 'prop-types'; 
// import { Link } from 'react-router-dom';
// import imdb from "../assets/IMDB.png";
// import Favorite from "../assets/Favorite.png";

const imgUrl = import.meta.env.VITE_MOVIEBOX_IMG;

const Featured = ({ movies }) => {
  const getReleaseDateMillis = (dateStr) => {
    const date = new Date(dateStr);
    return date.getTime();
  };

  return (
    <div className='px-5 py-4 sm:pt-0'>
      <div className='flex flex-row justify-between py-2'>
        <h1>Featured Movie</h1>
        {/* <a className='flex flex-row px-3 '>
          See more <img src={right} alt="Logo" className="h-4 mt-1 px-3" />
        </a> */}
      </div>

      <div className='grid sm:grid-cols-4 gap-2 py-2'>
        {movies.map((movieReq) => (
 
    <div key={movieReq.id} data-testid="movie-card" className='card shadow-md bg-white text-black flex flex-col py-2 px-2 rounded-md relative'>
     
      {/* <img src={Favorite} alt="Favorite Icon" className="absolute top-6 right-2 h-6 w-6 cursor-pointer" /> */}
      
      <img data-testid="movie-poster" src={imgUrl + movieReq.poster_path} alt={movieReq.title} className='object-cover h-auto object-center' />
      <span data-testid="movie-release-date" className='py-2 px-1'> {getReleaseDateMillis(movieReq.release_date)}</span>
      <h1 data-testid="movie-title" className='font-bold text-lg px-1'>{movieReq.title}</h1>
      <div className='flex flex-row '>
        <div className='flex py-2'>
          <h6 className='px-6'>{movieReq.vote_average} / 10</h6>
        </div>
      </div>
    </div>
 
))}

      </div>
    </div>
  );
}

Featured.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
    })
  ).isRequired,


};

export default Featured