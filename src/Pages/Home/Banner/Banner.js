import React from "react";
import img1 from '../../../Assets/Images/Banner/1.jpg'
import img2 from '../../../Assets/Images/Banner/2.jpg'
import img3 from '../../../Assets/Images/Banner/3.jpg'
import img4 from '../../../Assets/Images/Banner/4.jpg'
import BannerCard from "./BannerCard";



const bannerItems = [
    {
        image: img1,
        id: 1,
        previous: 5,
        next: 2
    },
    {
        image: img2,
        id: 2,
        previous: 1,
        next: 3
    },
    {
        image: img3,
        id: 3,
        previous: 2,
        next: 4
    },
    {
        image: img4,
        id: 4,
        previous: 3,
        next: 1
    }
]

const Banner = () => {
  return (
    <div className="carousel w-full mb-10">
      {
        bannerItems?.map(slider => <BannerCard key={slider?.id} slider={slider}></BannerCard>)
      }
    </div>
  );
};

export default Banner;
