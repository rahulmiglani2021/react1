import React from 'react';
import PokedexHeader from './Components/PokedexHeader.js';
import './App.css';


function App() {
  return (
    <div className="App">

      <PokedexHeader author ={'@rahul.craverapp.com'} name={'Rahul'}  />
      <PokedexHeader author ={'@elise.craverapp.com'} name={'Elise'}  />
      <PokedexHeader author ={'@aya.craverapp.com'} name={'Aya'}  />

    </div>
  )
}

export default App;
