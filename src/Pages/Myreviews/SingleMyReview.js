import React from "react";

const SingleMyReview = ({ singleServiceReview, handleDelete }) => {
  const { serviceName, review, _id } = singleServiceReview;
  return (
    <div className="card w-96 bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title">Service Name: {serviceName}</h2>
        <p>Review: {review}</p>
        <div className="card-actions justify-end">
          <button onClick={() => handleDelete(_id)} className="btn btn-info btn-outline">Delete</button>
          <button className="btn btn-warning btn-outline">Update</button>
        </div>
      </div>
    </div>
  );
};

export default SingleMyReview;
