import React from 'react';
import homeStyles from './home.module.css';

export default function Home() {
  return (
    <>
      <div>
        <h1>Wonderful Wishlist</h1>
        <p>
          Create and share wishlists with friends and family. Let them
          collaborate and claim gifts, entirely hidden from your view.
        </p>
        <button className={homeStyles.landingButton}>Create wishlist</button>
      </div>
    </>
  );
}
