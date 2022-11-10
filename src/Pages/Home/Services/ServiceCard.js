import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ServiceCard = ({ service }) => {
  const { img, title, price, _id, description, rating } = service;
  return (
    <PhotoProvider>
      <div className="card mx-auto card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <PhotoView src={img}>
            <img
              src={img}
              className="rounded-lg"
              style={{ height: "250px" }}
              alt=""
            />
          </PhotoView>
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl">{title}</h2>
          <div>
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">
                <span className=" text-yellow-400">Price:</span> ${price}
              </p>
              <p className=" text-lg font-semibold flex items-center justify-end gap-2">
                <span className=" text-yellow-400">Rating:</span> {rating}{" "}
                <FaStar className="text-yellow-400"></FaStar>
              </p>
            </div>
            <p className="text-justify my-3">{description.slice(0, 100)}...</p>
            <div className="card-actions justify-start">
              <Link to={`/services/${_id}`}>
                <button className="btn btn-outline btn-primary">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PhotoProvider>
  );
};

export default ServiceCard;
