import React from 'react'

const Bookmarks = (props) => {
  return (
    <>
   
    <h2>Bookmarks</h2>
    <div className="image-grid">
      {props.bookmarks.map((bookmark) => {
        return (
          <div className="image-item" key={bookmark.id}>
            <img src={bookmark.urls.small} alt={bookmark.alt_description} />
          </div>
        );
      })}
    </div>

    </>
  )
}

export default Bookmarks