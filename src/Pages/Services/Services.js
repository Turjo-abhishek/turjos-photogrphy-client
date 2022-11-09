import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-20">
      <div className="text-center mb-12">
        <p className="font-bold text-2xl text-indigo-600 mb-5">Services</p>
        <h2 className="font-bold text-5xl mb-5">Available Packages</h2>
        <p className="mx-auto w-3/5 font-semibold">
          The packages available for reservation are listed below. Please have a look at these packages and find the best one suitable for you. Looking forward to Work together. Best Regards from Turjo's Photography!
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {
            services?.map(service  => <ServiceCard key={service?._id} service={service}></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Services;
