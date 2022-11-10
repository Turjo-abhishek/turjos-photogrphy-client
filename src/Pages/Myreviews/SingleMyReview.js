import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/Authprovider/Authprovider";

const SingleMyReview = ({ singleServiceReview, handleDelete }) => {
  const {setClick} = useContext(AuthContext);
  const { serviceName, review, _id } = singleServiceReview;
  return (
    <div className="card w-96 bg-neutral text-neutral-content mx-auto">
      <div className="card-body items-center text-center">
        <h2 className="card-title">Service Name: {serviceName}</h2>
        <p>Review: {review}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-info btn-outline"
          >
            Delete
          </button>
          <Link to="/update">
            <button onClick={() => setClick(_id)} className="btn btn-warning btn-outline">Update</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleMyReview;
