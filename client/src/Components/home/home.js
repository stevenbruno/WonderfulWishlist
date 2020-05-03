import React from 'react';
import homeStyles from './home.module.css';

export default function Home() {
  return (
    <>
      <div>
        <h1>Wonderful Wishlist</h1>
        <p>Share your holiday wishlists with friends and family.</p>
        <button className={homeStyles.landingButton}>Create wishlist</button>
      </div>
    </>
  );
}
