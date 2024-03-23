const getstorejobapllcation = () => {
  const storeedjobapplication = localStorage.getItem('job-application');

  if (storeedjobapplication) {
    return JSON.parse(storeedjobapplication);
  }
  return [];
};

const savejobs = (id) => {
    const storejobapllcations=getstorejobapllcation();
    const isexits=storejobapllcations.find(jobId=>jobId===id)
    if(!isexits){
        storejobapllcations.push(id)
        localStorage.setItem('job-application',JSON.stringify(storejobapllcations))
    }
};

export {getstorejobapllcation, savejobs };
