import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {Originals,action,ComedyMovies,trending,HorrorMovies,RomanceMovies,Documentaries} from './urls'
import './App.css';
import Banner from './components/Banner/Banner';
import Rowpost from './components/Rowpost/Rowpost';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner url={trending} title='Trending' />
      <Rowpost url={Originals} title='Netflix Originals' />
      <Rowpost url={action} title='Action' isSmall/>
      <Rowpost url={ComedyMovies} title='Comedy Movies' isSmall/>
      <Rowpost url={HorrorMovies} title='Horror Movies' isSmall/>
      <Rowpost url={RomanceMovies} title='Romance Movies' isSmall/>
      <Rowpost url={Documentaries} title='Documentaries' isSmall/>
    
    </div>
  );
}

export default App;
