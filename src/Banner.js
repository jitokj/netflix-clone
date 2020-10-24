import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

const base_url = "https://image.tmdb.org/t/p/original";
const Banner = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(requests.fetchNetflixOriginals)
      .then((res) => {
        setMovies(
          res.data.results[
            Math.floor(Math.random() * (res.data.results.length - 1))
          ]
        );
      })
      .catch(() => {});
  }, []);

  function truncate (str,n){
    return str?.length>n ?str.substr(0,n-1)+"...": str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${base_url}${movies?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movies?.title || movies?.name || movies?.original_name}</h1>
      <div className="banner__buttons">
        <button className="banner__button">Play</button>
        <button className="banner__button">My List</button>
      </div>
    <h1 className="banner__description">{truncate(movies?.overview,150)}</h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
