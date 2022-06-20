import React from 'react';
import './scss/App.scss';
import meme from './assets/meme-logo.jpeg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
				<img src={meme} alt="logo" />
      </header>
    </div>
  );
}

export default App;
