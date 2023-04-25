import React from "react";
import axios from "axios";
import { useState } from "react";
import Bookmarks from "./Bookmarks";

export const  Image =() =>{

    const handleSearch = async(event)=> {
      event.preventDefault();
      alert("Searching...");
  
  
      const unsplash =axios.create({
        baseURL: "https://api.unsplash.com",
        headers: {
          Authorization: `Client-ID 3VJfEN2xYy6JaVe5nJnKY6eD656KNHcKlMpT6CD0OMA`
      },
     } )
      const response = await unsplash.get('/search/photos',{
        params: { query: searchTerm },
        });
  
      setImages(response.data.results);
      console.log(response.data.results);
      setSearchTerm('');
        
        
  
    }
  
    const handleBookmarkClick = (image) => {
      if(bookmarks.includes(image)){
        setBookmarks(bookmarks.filter((bookmark) => bookmark.id !== image.id));
      }else{
        setBookmarks([...bookmarks, image]);
      }
  
      console.log(bookmarks);
    }
  
    const [searchTerm, setSearchTerm] = useState("")
    const [images, setImages] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);
  
    return (
      <div className="App">
  
        <h1>React Photo Search</h1>
  
        <form>
          <input type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
          <button onClick={handleSearch}>Search</button>
        </form>

        <div className="bookmarks-tab">
         {/* <Bookmarks bookmarks = {bookmarks}/> */}
        </div>


  
        <div className="image-grid">
          {images.map((image) => {
            return (
              <>
              
              <div className="image-item" key={image.id}>
                <img src={image.urls.small} alt={image.alt_description} onClick={(image)=>handleBookmarkClick(image)} />
                
                
              </div>
              
              </>
            );
          })}
          </div>
  
  
        
      </div>
    );
  }

