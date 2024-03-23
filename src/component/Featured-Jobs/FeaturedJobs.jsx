import { useEffect, useState } from "react";
import Job from "../Job/Job";



const FeaturedJobs = () => {
    const[Jobs,setjobs]=useState([]);
    const [datalength,setdatalength]=useState(4)
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setjobs(data))
    },[])




    return (
    <>
    <div>

     <div className='w-4/5 m-auto text-center p-5'>
            <h2 className="md:text-6xl  py-5">Featured Jobs : {Jobs.length}</h2>
        <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
      <div className="w-4/5 my-5  m-auto flex flex-wrap">
        {Jobs.slice(0,datalength).map(job=><Job job={job} key={job.id}></Job>)}
        </div>
        <div className={`w-4/5 m-auto my-5 flex justify-center items-center ${datalength===Jobs.length && 'hidden'}`}>
        <button onClick={()=>setdatalength(Jobs.length)}
        className="btn bg-[#00935f]  text-white hover:text-black">
            Show all data
          </button>
        </div>


    </div>
    </>
    );
};

export default FeaturedJobs;