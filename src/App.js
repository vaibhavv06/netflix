import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner'
import Nav from './Nav';

function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner />
      <Row 
        title ="NETFLIX ORIGINALS" 
        fetchUrl={requests.fetchOriginals}
        isLargeRow = {true}
        />
      <Row title ="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title ="Top Rated" fetchUrl={requests.fetchTrending}/>
      <Row title ="Drama" fetchUrl={requests.fetchTrending}/>
      <Row title ="Action" fetchUrl={requests.fetchTrending}/>
      <Row title ="Thriller" fetchUrl={requests.fetchTrending}/>
      <Row title ="Fiction" fetchUrl={requests.fetchTrending}/>
      <Row title ="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title ="Trending Now" fetchUrl={requests.fetchTrending}/>

    </div>
  );
}

export default App;
