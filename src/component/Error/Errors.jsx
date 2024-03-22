import { Link } from "react-router-dom";

const Errors = () => {
    return (
        <div className="w-full m-auto flex flex-col justify-center h-svh  text-center items-center">
            <h1 className="text-6xl text-red-500">oops!!!</h1>
            <Link to='/' className="btn btn-outline my-5 btn-error">Back to Home</Link>
        </div>
    );
};

export default Errors;