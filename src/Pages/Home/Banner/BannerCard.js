import React from "react";
import "./BannerCard.css";

const BannerCard = ({ slider }) => {
  const { image, id, next, previous } = slider;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div style={{height: "800px"}} className="img-overlay ">
        <img
          src={image}
          style={{height: "800px"}}
          alt=""
          className="w-full rounded-xl"
        />
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={`#slide${previous}`} className="btn-ghost text-4xl lg:text-8xl text-white">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn-ghost text-4xl lg:text-8xl text-white">
          ❯
        </a>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 gap-3 left-24 lg:left-44 top-1/3">
        <h1 className="text-white font-bold leading-none text-3xl mb-8 lg:mb-0 lg:text-6xl">
          Create Memories <br /> With Turjo's <br /> Photography
        </h1>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 gap-3 w-2/5 left-24 lg:left-44 top-2/4 mt-8">
        <p className="text-white text-xl ">
          Do you wish to relive your best moments? Book my packages. Services available for wedding photography to portrait and many more....
        </p>
      </div>
    </div>
  );
};

export default BannerCard;
