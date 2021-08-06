import { useState } from 'react';
import './App.css';

function App() {
  const [photos, setPhotos] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>ALBUMS</h1>
        <ul>
          {
            photos.map(photo =>
              <li key={photo.id}>
              <img src={photo.thumbnailUrl} title={photo.title} alt={photo.title}/></li>
              )
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
