import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './carousel.css'

const CarouselBanner = () => {
  return (
    <Carousel 
      showThumbs={false}
      autoPlay
      infiniteLoop
      showStatus={false}
      showIndicators={true}
      className="carousel-container"
    >
      <div>
        <img className='object-center size-auto' src="https://images.unsplash.com/photo-1518614368389-5160c0b0de72?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Annual Sports Day" />
        <p className="legend">Annual Sports Day - Celebrating Excellence in Sports</p>
      </div>
      <div>
        <img src="https://media.gettyimages.com/id/1246378536/photo/india-education.jpg?s=1024x1024&w=gi&k=20&c=-TvJQ86aLoZKfwysfGqIzjj7FrD40HfVn5loPUOtZ_A=" alt="Science Exhibition" />
        <p className="legend">Science Exhibition - Showcasing Student Innovations</p>
      </div>
      <div>
        <img src="https://media.gettyimages.com/id/1649353069/photo/dahi-handi-celebrations-as-part-of-krishna-janmashtmi-festival.jpg?s=1024x1024&w=gi&k=20&c=fA3SWz0MLSy096KxLcZ1MNa3vyBbOJZjomfSrlndKw8=" alt="Cultural Fest" />
        <p className="legend">Cultural Fest - Embracing Diversity and Creativity</p>
      </div>
    </Carousel>
  );
};

export default CarouselBanner;
