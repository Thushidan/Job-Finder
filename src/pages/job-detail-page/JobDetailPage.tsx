import Hero from "../../components/hero/Hero";
import JobDetails from "../../components/job-details/JobDetails";
import Navbar from "../../components/navbar/Navbar";

const JobDetailPage = () => {
  return (
    <>
      <Navbar />
      <Hero 
        isFindJob={true}
        titleOne="Find a New Job"
        description="Find new jobs & explore the job community!"
      />
      <JobDetails />
    </>
  );
}

export default JobDetailPage;