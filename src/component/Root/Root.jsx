import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Hader from "../Hader/Hader";


const Root = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
            <Hader>

            </Hader>

            <Outlet>

            </Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;