import React from "react";

const Job = ({ job }) => {
        // ,job_description
        
        const { company_name, job_title, logo,remote_or_onsite,location,job_type,salary } = job;

  return (
    <div className="card w-96 bg-base-100 shadow-xl m-auto my-5">
      <figure>
        <img
          src={logo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>

        <div className="">
            <button className="btn btn-outline btn-success mr-5">{remote_or_onsite}</button>
            <button className="btn btn-outline btn-success ml-5">{job_type}</button>
            <div className="flex"><p>{location}</p> <p>{salary}</p></div>
          
        </div>
        <div className="card-actions justify-start">
          <button className="btn bg-[#00935f]  text-white hover:text-black">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Job;
