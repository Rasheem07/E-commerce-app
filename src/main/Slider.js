import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import Gallery from "react-image-gallery";
import "./imageslider.css";

function ImageSlider() {
  const images = [
    {
      original: "one.jpg",
        // thumbnail: 'one.jpg',
      description: "Get your orders at door",
    },
    // {
    //   original: "four.jpg",
    //     // thumbnail: 'two.jpg',
    //     description: "Order from anywhere",
    //   },
      {
        original: "three.jpg",
        // thumbnail: 'three.jpg',
        description: "Show some love",
    },
    {
      original: "two.jpg",
        // thumbnail: 'four.jpg',
      description: "Celebrate your festivals",
    },
  ];

  return (
    <div>
      <Gallery
        items={images}
        autoPlay={true} // Enable automatic playback
        slideInterval={2000} // Set the interval between slides in milliseconds (e.g., 5 seconds)
        infinite={true}
      // Loop back to the beginning after reaching the last slide
      />
    </div>
  );
}

export default ImageSlider;
