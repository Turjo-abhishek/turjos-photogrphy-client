import React from "react";
import toast from "react-hot-toast";

const Addservice = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const photoURL = form.photoURL.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;

    const service = {
      title,
      photoURL,
      price,
      rating,
      description
    };

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
         toast.success('Service added successfully');
        }
        form.reset();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="w-full overflow-scroll h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 flex items-center justify-center">
      <div className="bg-white py-6 px-10 sm:max-w-md w-full ">
        <div className="sm:text-3xl text-2xl font-semibold text-center text-sky-600  mb-12">
          Add Services
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="title"
              className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500"
              placeholder="Enter service title here"
            />
          </div>
          <div>
            <input
              type="text"
              name="photoURL"
              className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 my-8"
              placeholder="Enter image URL here"
            />
          </div>
          <div>
            <input
              type="text"
              name="price"
              className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"
              placeholder="Enter price of the package"
            />
          </div>
          <div>
            <input
              type="text"
              name="rating"
              className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"
              placeholder="Enter rating here"
            />
          </div>
          <div className="">
            <input
              type="text"
              name="description"
              className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"
              placeholder="Enter package description here"
            />
          </div>
          <div className="flex justify-center my-6">
            <input
              type="submit"
              className="btn btn-outline btn-primary"
              value="Add Service"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addservice;
