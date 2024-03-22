import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
    const[Jobs,setjobs]=useState([]);
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setjobs(data))
    },[])




    return (
    <>
    <div>

     <div className='w-4/5 m-auto text-center p-5'>
            <h2 className="text-6xl  py-5">Featured Jobs : {Jobs.length}</h2>
        <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
      <div className="w-4/5 my-5 bg-gray-400 m-auto flex flex-wrap">
        {Jobs.map(job=><Job job={job} key={job.id}></Job>)}
        </div>


    </div>
    </>
    );
};

export default FeaturedJobs;