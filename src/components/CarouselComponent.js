import React from "react";
import "../App.css";
import CardComponent from "./CardComponent";
import Navbar from "./Navbar/Navbar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { blogData } from "../data/blog";
import Banner from "./Banner";
import Footer from "./Footer";
import BlogContent from "../pages/BlogContent";

function CarouselComponent() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <React.Fragment>
      <Navbar />
      <Banner className="m-8" />
      <div style={{ background: "#e5eee9" }} className="m-8">
        <Carousel
          focusOnSelect={true}
          swipeable={true}
          draggable={true}
          responsive={responsive}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {blogData.map((data, index) => (
            <CardComponent id={data.id} key={index} />
          ))}
        </Carousel>
      </div>
      <BlogContent />
      <Footer />
    </React.Fragment>
  );
}

export default CarouselComponent;
