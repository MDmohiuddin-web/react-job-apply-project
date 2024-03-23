import { useLoaderData, useParams } from "react-router-dom";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { TbCoinTaka } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { FaCalendarDay } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { savejobs } from "../utility/Utility";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Jobdetalse = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const job = jobs.find((job) => job.id == id);
  console.log(job);

  const jobapply = () => {
    savejobs(id)
     toast.success("job is applied");
  }
 


  return (
    <div className="font-bold uppercase">
      <div className="grid gap-5 md:grid-cols-4">
        <div className="border grid md:col-span-3">
          <h2 className="text-4xl">detalse is here </h2>
          <h2>job details of : {job.job_title} </h2>
          <h2>company name : {job.company_name}</h2>
        </div>
        {/*  */}
        <div className="border grid md:col-span-1 p-5">
          <div className="py-3">
            <h2 className="py-2"> Job Details </h2>
            <hr />
            <p className="flex items-center py-1 gap-3">
              <TbCoinTaka /> salary : {job.salary}{" "}
            </p>

            <p className="flex items-center py-1 gap-3">
              <FaCalendarDay />
              job title : {job.job_title}
            </p>
            <h2 className="py-2">Contact Information</h2>
            <hr />
            <p className="flex items-center py-1 gap-3">
              <FaPhone /> Phone : {job.contact_information.phone}
            </p>
            <p className="flex items-center py-1 gap-3">
              <MdOutlineMarkEmailRead /> Email : {job.contact_information.email}
            </p>
            <p className="flex items-center py-1 gap-3">
              <IoLocationOutline />
              Address : {job.contact_information.address}
            </p>
          </div>
          <button onClick={jobapply}
          className="btn bg-[#00935f]  text-white hover:text-black">
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Jobdetalse;
