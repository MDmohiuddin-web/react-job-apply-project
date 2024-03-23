import React from 'react';
import Catagorybox from './Catagorybox';

const Catagorylist = () => {
    return (<>
        <div className='w-4/5 m-auto text-center p-5'>
            <h2 className="md:text-6xl  py-5">Jon Category List</h2>
        <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
        
        </div>
        <Catagorybox></Catagorybox>
        </>
    );
};

export default Catagorylist;