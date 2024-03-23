import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getstorejobapllcation } from "../utility/Utility";

const Appliedjobs = () => {
  const jobs = useLoaderData();
  
  const [applidjob, setapplidjob] = useState([]);
  
  const [displayjob,setdisplayjob]=useState([]);

  useEffect(() => {
    const storedjobs = getstorejobapllcation();

    if (jobs.length > 0) {
    //   const jobapplice = jobs.filter((job) => job.id == id);

    const jobsapplied=[];

    for(const id of storedjobs){
        const job=jobs.find(job => job.id == id)
        if(job){
            jobsapplied.push(job)
        }
    }
    setapplidjob(jobsapplied)
    setdisplayjob(jobsapplied)
    }
  }, [jobs]);
  const handelfilter=(filter)=>{
if(filter==='all'){
    setdisplayjob(jobsapplied)
}
if (filter==='Remote') {
    const Remotejob=applidjob.filter(job=>job.remote_or_onsite === 'Remote')
    setdisplayjob(Remotejob);

    
} if (filter ==='Onsite') {
   const  Onsite=applidjob.filter(job=>job.remote_or_onsite==='Onsite')
   setdisplayjob(Onsite)
    
} 

  }

  return (
    <div className="font-bold uppercase">
      <h2 className="text-center text-4xl py-5">job i applied : {applidjob.length} </h2>
      <div className="dropdown w-4/5 flex justify-end m-auto py-5">
  <div tabIndex={0} role="button" className="btn m-1">Click</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li onClick={()=>handelfilter('all')}><a>all</a></li>
    <li onClick={()=>handelfilter('Remote')}><a>remote</a></li>
    <li onClick={()=>handelfilter('Onsite')}><a>onsite</a></li>
  </ul>
</div>
     
     
     
      <div className="w-4/5 m-auto  py-5">
        {
            displayjob.map(job=><li key={job.id} className="py-5 list-none">
                <div className="bg-green-100 p-5">
                    <img src={job.logo} alt="" />
                <p> job name : {job.job_title}</p>
                <p> company name : {job.company_name}</p>
                <p>jon type : {job.remote_or_onsite}</p>
                </div>
            </li>)
        }
      </div>
    </div>
  );
};

export default Appliedjobs;
