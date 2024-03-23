import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { TbCoinTaka } from "react-icons/tb";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  // ,job_description

  const {id,
    company_name,
    job_title,
    logo,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;

  return (
    <div className="card w-96 bg-base-100 shadow-md m-auto my-5">
      <figure>
        <img src={logo} alt="Shoes" className="pt-5"/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>

        <div className="">
          <button className="btn btn-outline btn-success mr-5">
            {remote_or_onsite}
          </button>
          <button className="btn btn-outline btn-success ml-5">
            {job_type}
          </button>
          <div className="flex justify-center items-center">
            <p className="flex items-center py-2 gap-1">
              
              <IoLocationOutline />
              {location}
            </p>
            <p className="flex items-center py-2 gap-1">
              <TbCoinTaka /> {salary}
            </p>
          </div>
        </div>
        <div className="card-actions justify-start">
          <Link to={`/jobs/${id}`}><button className="btn bg-[#00935f]  text-white hover:text-black">
            View Details
          </button></Link>
          
        </div>
      </div>
    </div>
  );
};

export default Job;
