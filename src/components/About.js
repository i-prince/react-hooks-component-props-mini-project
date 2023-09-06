// src/components/About.js
import React from 'react';

function About({ image, aboutText }) {
  // Set a default image URL if 'image' prop is not provided
  const imageUrl = image || 'https://via.placeholder.com/215';

  return (
    <aside>
      <img src={imageUrl} alt="blog logo" />
      <p>{aboutText}</p>
    </aside>
  );
}

export default About;
