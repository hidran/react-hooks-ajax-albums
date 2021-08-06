import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const photosUrl = 'https://jsonplaceholder.typicode.com/photos';

    const albumsUrl = 'https://jsonplaceholder.typicode.com/albums';

    const usersUrl = 'https://jsonplaceholder.typicode.com/users';


  const [photos, setPhotos] = useState([]);
  const [albums, setAlbums] = useState([]);
    const [users, setUsers] = useState([]);
  useEffect(() => {
    const getPhotos = async () => {
      const photos = await fetch(photosUrl).then(res => res.json());
      setPhotos(photos.slice(0,20));
    };
    getPhotos();

    return () => {
      
    }
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1>ALBUMS</h1>
        <ul className="photos">
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
