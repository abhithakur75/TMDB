import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Popular from './Popular.jsx';
import Upcoming from './Upcoming.jsx';
import './Home.css';
import './Movie.js';
import './Topmovie.css';
import Topmovie from './Topmovie.jsx';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Api_key = '191c99c3810edc08259371af1c40a35c';
const base_url = "https://api.themoviedb.org/3";
const img_path = "https://image.tmdb.org/t/p/w500";
const discover_url = `${base_url}/discover/movie?sort_by=popularity.desc&api_key=${Api_key}`;

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
};

const divStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '280px',
  cursor: 'pointer',
  color: '#ffffff',
  textShadow: '1px 1px 5px rgba(0, 0, 0, 0.7)'
};

const Home = () => {
  const [slideImages, setSlideImages] = useState([]);

  useEffect(() => {
    axios.get(discover_url)
      .then(response => {
        const movies = response.data.results;
        const movieDetailsPromises = movies.map(movie =>
          axios.get(`${base_url}/movie/${movie.id}?api_key=${Api_key}&append_to_response=credits`)
        );

        Promise.all(movieDetailsPromises)
          .then(detailsResponses => {
            const images = detailsResponses.map(detailsResponse => {
              const movie = detailsResponse.data;
              const genres = movie.genres.map(genre => genre.name).join(', ');
              const cast = movie.credits.cast.slice(0, 3).map(actor => actor.name).join(', ');

              // if (!movie.backdrop_path) return null;
              return {
                url: `${img_path}${movie.backdrop_path}`,
                id: movie.id,
                title: movie.title,
                genres,
                releaseDate: movie.release_date,
                cast
              };
            });
            setSlideImages(images);
          });
      })
      .catch(error => {
        console.error('Error fetching data from API', error);
      });
  }, []);

  return (
    <>
      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <Link to={`/trailer/${slideImage.id}`}>
                <div
                  style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
                >
                  <h2>{slideImage.title}</h2>
                  <p>{slideImage.genres}</p>
                  <p>{slideImage.releaseDate}</p>
                  <p>Cast: {slideImage.cast}</p>
                </div>
              </Link>
            </div>
          ))}
        </Slide>
      </div>
      <Topmovie />
      <Popular />
      <Upcoming />
    </>
  );
};

export default Home;
