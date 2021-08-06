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
      setPhotos(photos.slice(0, 20));
    };
    getPhotos();

    return () => {
      
    }
  }, []);
  
  useEffect(() => {
    const getAlbums = async () => {
      const albums = await fetch(albumsUrl).then(res => res.json());
      setAlbums(albums.slice(0, 20));
    };
    getAlbums();

    return () => {
      
    }
  }, []);
  useEffect(() => {
    const getUsers = async () => {
      const users = await fetch(usersUrl).then(res => res.json());
      setUsers(users.slice(0, 20));
    };
    getUsers();

    return () => {
      
    }
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>ALBUMS</h1>
         <form className="gallery">
          <div className="form-group">
        <label htmlFor="users"> USERS
             <select name ="users" id="users">
             <option value="">SELECT</option>
               {
                  users.map(a => <option key={a.id} value={a.id}>{ a.name}</option>)
                 
               }
             </select>

          </label>
          </div>
         <div className="form-group">
          <label htmlFor="albums"> ALBUMS
             <select name ="albums" id="albums">
             <option value="">SELECT</option>
               {
                  albums.map(a => <option key={a.id} value={a.id}>{ a.title}</option>)
                 
               }
             </select>

          </label>
          
        </div>
        </form>
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
