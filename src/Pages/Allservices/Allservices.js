import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ServiceCard from "../Home/Services/ServiceCard";

const Allservices = () => {
  const [loading, setLoading] = useState(true);
  const [allServices, setAllServices] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/allservices`)
    .then(res => res.json())
    .then(data => {
      setAllServices(data);
      setLoading(false);
    })
  } ,[]);


  if (loading) {
    return (
      <div class="flex justify-center items-center">
        <div
          class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }


  return (
    <div className="my-20">
      <Helmet>
        <title>Turjo's Photography - Services</title>
      </Helmet>
      <div className="text-center mb-12">
        <p className="font-bold text-2xl text-indigo-600 mb-5">Services</p>
        <h2 className="font-bold text-5xl mb-5">Available Packages</h2>
        <p className="mx-auto w-3/5 font-semibold">
          The packages available for reservation are listed below. Please have a
          look at these packages and find the best one suitable for you. Looking
          forward to Work together. Best Regards from Turjo's Photography!
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {allServices?.map((service) => (
          <ServiceCard key={service?._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Allservices;
