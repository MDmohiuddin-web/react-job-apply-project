import React from "react";
import designphoto1 from "../../assets/icons/accounts.png";
import designphoto2 from "../../assets/icons/creative.png";
import designphoto3 from "../../assets/icons/marketing.png";
import designphoto4 from "../../assets/icons/chip.png";

const Catagorybox = () => {
  return (
    <div className=" p-5  justify-around  gap-5 md:flex">

      <div className="bg-gray-100 rounded-lg shadow-sm p-5 w-full       my-5 md:my-0    md:w-[200px]  ">
       
        <img src={designphoto1} alt="  " />
        <h2 className="py-5">Account & Finance </h2>
        <p>300 Jobs Available</p>
      </div>
      <div className="bg-gray-100 rounded-lg shadow-sm p-5 w-full my-5 md:my-0 md:w-[200px]">
        <img src={designphoto2} alt="  " />
        <h2 className="py-5">Creative Design</h2>
        <p>100+ Jobs Available</p>
      </div>
      <div className="bg-gray-100 rounded-lg shadow-sm p-5 w-full my-5 md:my-0 md:w-[200px]">
      <img src={designphoto3} alt="  " />
        <h2 className="py-5">Marketing & Sales</h2>
        <p>150 Jobs Available</p>
      </div>
      <div className="bg-gray-100 rounded-lg shadow-sm p-5 w-full my-5 md:my-0 md:w-[200px]">
      <img src={designphoto4} alt="  " />
        
        <h2 className="py-5">Engineering Job </h2>
        <p>224 Jobs Available</p>
      </div>


    </div>
  );
};

export default Catagorybox;
