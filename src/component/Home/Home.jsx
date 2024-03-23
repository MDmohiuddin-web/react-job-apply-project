import Baner from "../Baner/Baner";
import FeaturedJobs from "../Featured-Jobs/FeaturedJobs";
import Catagorylist from "../catagorylist/Catagorylist";



const Home = () => {
    return (
        <div className="font-bold uppercase">
            {/* <h1>welcome</h1> */}
            <Baner></Baner>
            <Catagorylist></Catagorylist>
            <FeaturedJobs></FeaturedJobs>
           
            
        </div>
    );
};

export default Home;