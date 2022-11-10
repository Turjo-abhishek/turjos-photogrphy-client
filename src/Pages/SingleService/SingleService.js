import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { AuthContext } from "../../Contexts/Authprovider/Authprovider";
import SingleReview from "./SingleReview";
import toast from "react-hot-toast";

const SingleService = () => {
  const [reviewdata, setReviewData] = useState([]);
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const { img, title, _id, price, description, rating } = service;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const review = form.review.value;
    const photourl = user?.photoURL;
    const userName = user?.displayName;
    const email = user?.email;

    const userReview = {
      review: review,
      serviceName: title,
      photourl,
      userName,
      service: _id,
      email,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("review added successfully");
        }
        form.reset();
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?service=${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviewData(data);
      });
  }, [_id]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div className="card card-compact w-full bg-base-100 shadow-xl mx-auto my-10">
        
        <figure>
          <img src={img} className="rounded-lg" alt="" />
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
            <p className="text-justify my-3">{description}</p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="my-8 text-4xl font-bold text-center text-orange-600">
          Reviews
        </h1>
        {reviewdata.map((singleReview) => (
          <SingleReview
            key={singleReview._id}
            singleReview={singleReview}
          ></SingleReview>
        ))}
        {user?.uid ? (
          <form onSubmit={handleSubmit}>
            <div className="text-center my-16">
              <input
                name="review"
                type="text"
                placeholder="Type your review here"
                className="input input-bordered w-1/3"
              />
              <input
                className="btn btn-outline btn-primary"
                type="submit"
                value="add review"
              />
            </div>
          </form>
        ) : (
          <p className="text-center text-xl font-bold my-10">
            Please{" "}
            <Link className="text-2xl text-orange-600" to="/login">
              Login
            </Link>{" "}
            first to add review...!
          </p>
        )}
      </div>
    </div>
  );
};

export default SingleService;
