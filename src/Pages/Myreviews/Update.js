import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/Authprovider/Authprovider";

const Update = () => {
  const { click } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const userReview = form.review.value;

    fetch(`https://assignment-11-server-murex.vercel.app/myreviews?_id=${click}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ review: userReview }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="text-center my-20">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="review"
          placeholder="Type review here"
          className="input input-bordered w-full max-w-xs"
        />
        <input className="btn btn-outline" type="submit" value="add review" />
      </form>
    </div>
  );
};

export default Update;
