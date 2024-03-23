import userphoto from "../../assets/images/user.png";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const tosthandel=()=>{
    toast.info("scroll down ");
}

const Baner = () => {
    return (
        <div className="md:flex justify-around my-5">
            <div className="md:w-[48%] m-auto p-5 pl-10  ">
                <h3 className="md:text-6xl">One Step Closer To Your <span className="text-[#00935f] "> Dream Job</span></h3>
                <p className="py-5">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button onClick={tosthandel}
        className="btn bg-[#00935f]  text-white hover:text-black">
            Get Started
          </button>
            </div>
            <div className="md:w-[40%]  ">
                <img src={userphoto} alt="" />

            </div>
            <ToastContainer />
        </div>
    );
};

export default Baner;