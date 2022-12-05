import React from "react";
import "./HomeScreen.css";
import Banner from "../Banner";
import Nav from "../Nav";
import requests from "../Requests";
import Row from "../Row";
const HomeScreen = () => {
  return (
    <div className="homeScreen">
      {/* nav*/}
      <Nav />
      {/*Banner */}
      <Banner />
      {/*Rows */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated " fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies " fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies " fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Docmentaries" fetchUrl={requests.fetchDocumentMovies} />
    </div>
  );
};

export default HomeScreen;
