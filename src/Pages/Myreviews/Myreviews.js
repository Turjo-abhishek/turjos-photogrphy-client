import React, {useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/Authprovider/Authprovider";
import SingleMyReview from "./SingleMyReview";

const Myreviews = () => {
  const { user } = useContext(AuthContext);
  const [serviceReviews, setServiceReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setServiceReviews(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const ifDelete = window.confirm("Are you sure to delete?");
    if (ifDelete) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.deletedCount > 0) {
            toast.error("deleted order successfully");
            const remaining = serviceReviews.filter(
              (order) => order?._id !== id
            );
            setServiceReviews(remaining);
          }
        });
    }
  };

  return (
    <div
      className={`${
        serviceReviews?.length === 0
          ? "my-10"
          : "grid text-center grid-cols-1 lg:grid-cols-3 gap-5 my-10"
      }`}
    >
      <Helmet>
        <title>Turjo's Photography - My Reviews</title>
      </Helmet>
      {serviceReviews.length === 0 ? (
        <p className="text-center font-bold text-4xl">No Reviews were added</p>
      ) : (
        serviceReviews.map((singleServiceReview) => (
          <SingleMyReview
            key={singleServiceReview._id}
            singleServiceReview={singleServiceReview}
            handleDelete={handleDelete}
          ></SingleMyReview>
        ))
      )}
    </div>
  );
};

export default Myreviews;
