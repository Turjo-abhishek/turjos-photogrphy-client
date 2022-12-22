import React from "react";
import { FaCamera, FaTools } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { FcEditImage } from "react-icons/fc";
import { TbReportMoney } from "react-icons/tb";

const Features = () => {
  return (
    <div className="my-16">
        <h1 className="text-3xl lg:text-5xl text-center font-bold mb-16">Why Choose Me?</h1>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 my-10">
        <div className="flex justify-center flex-col items-center gap-4">
          <FaCamera className="text-6xl text-sky-600"></FaCamera>
          <p className="text-md font-bold">High Configuration Camera</p>
        </div>
        <div className="flex justify-center flex-col items-center gap-4">
          <FaTools className="text-6xl text-yellow-400"></FaTools>
          <p className="text-md font-bold">Best Equipments</p>
        </div>
        <div className="flex justify-center flex-col items-center gap-4">
          <MdOutlineWatchLater className="text-6xl text-orange-600"></MdOutlineWatchLater>
          <p className="text-md font-bold">Timely Delivery</p>
        </div>
        <div className="flex justify-center flex-col items-center gap-4">
          <FcEditImage className="text-6xl"></FcEditImage>
          <p className="text-md font-bold">Best Editing</p>
        </div>
        <div className="flex justify-center flex-col items-center gap-4">
          <TbReportMoney className="text-6xl text-indigo-600"></TbReportMoney>
          <p className="text-md font-bold">Moneyback Guarantee</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
