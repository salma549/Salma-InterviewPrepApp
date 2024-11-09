import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import image1 from '../assets/images/image1.jpeg';
import image2 from '../assets/images/image2.jpeg';
import image3 from '../assets/images/image3.jpeg';
import image4 from '../assets/images/image4.jpeg';
import image5 from '../assets/images/image5.jpeg';

const HomeCarousel = () => {
  // Manually define each image item instead of using map
  const items = [
    <div className="carousel-item relative" key={1}>
  <div className="relative flex justify-center items-center bg-[#fbf5f3] h-[250px] md:h-[250px] lg:h-[400px] min-w-8xl ">
    <img
      src={image1}
      alt="Slide 1"
      className="carousel-image rounded-xl w-[90%] md:w-[70%] lg:w-[500px] h-[200px] md:h-[250px] lg:h-[400px]  object-cover"
    />
  </div>
</div>,
<div className="carousel-item relative" key={2}>
  <div className="relative flex justify-center items-center bg-[#fbf5f3] h-[250px] md:h-[300px] lg:h-[400px] w-full">
    <img
      src={image2}
      alt="Slide 2"
      className="carousel-image rounded-xl w-[90%] md:w-[48%] lg:w-[500px] h-[200px] md:h-[250px] lg:h-[300px] object-cover"
    />
  </div>
</div>,
<div className="carousel-item relative" key={3}>
  <div className="relative flex justify-center items-center bg-[#fbf5f3] h-[250px] md:h-[300px] lg:h-[400px] w-full">
    <img
      src={image3}
      alt="Slide 3"
      className="carousel-image rounded-xl w-[90%] md:w-[70%] lg:w-[500px] h-[200px] md:h-[250px] lg:h-[300px] object-cover"
    />
  </div>
</div>,
<div className="carousel-item relative" key={4}>
  <div className="relative flex justify-center items-center bg-[#fbf5f3] h-[250px] md:h-[300px] lg:h-[400px] w-full">
    <img
      src={image4}
      alt="Slide 4"
      className="carousel-image rounded-xl w-[90%] md:w-[70%] lg:w-[500px] h-[200px] md:h-[250px] lg:h-[300px] object-cover"
    />
  </div>
</div>,
<div className="carousel-item relative" key={5}>
  <div className="relative flex justify-center items-center bg-[#fbf5f3] h-[250px] md:h-[300px] lg:h-[400px] w-full">
    <img
      src={image5}
      alt="Slide 5"
      className="carousel-image rounded-xl w-[90%] md:w-[70%]   lg:w-[500px] h-[200px] md:h-[250px] lg:h-[300px] object-cover"
    />
  </div>
</div>

  ];

  return (
    <div className="carousel-container bg-[#fbf5f3] p-4 max-w-8xl mx-auto">
      <AliceCarousel
        mouseTracking
        items={items}
        autoPlay
        infinite
        autoPlayInterval={2000}
        disableButtonsControls
        disableDotsControls
      />
    </div>
  );
};

export default HomeCarousel;
