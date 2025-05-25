import { useParams } from "react-router-dom";
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import type { Job } from "../../types/interface.types";
import searchJobs from "../../services/searchJobs/searchJobs";
import JobCard from "../../components/job-card/JobCard";
import { Grid2x2, List } from "lucide-react";

const SearchJobsPage = () => {
  const { company, title } = useParams();
  const [searchJobsList, setSearchJobsList] = useState<Job[]>([]);
  const [isGrid, setIsGrid] = useState(false);

  const handleChangeGrid = () => {
    setIsGrid(!isGrid);
    console.log(isGrid);
  };

  const getSearchData = () => {
    searchJobs({
      company: company,
      title: title,
      setSearchJobsList: setSearchJobsList,
    });
  };

  useEffect(() => {
    getSearchData();
  }, []);

  return (
    <>
      <Navbar />
      <Hero
        titleOne="Search Jobs"
        titleTwo="Explore new jobs related to your preferences"
        isFindJob={true}
        description="Browse, Explore new latest jobs related to your preferences!"
      />
      <div className="px-[3rem] mb-[5rem]">
        <div className="pb-[2rem]">
          {Array.isArray(searchJobsList) && searchJobsList.length > 0 && (
            <div>
              <h5 className="font-bold text-[2rem]">Job results found ... </h5>
              <h5 className="text-[#676767] font-light pt-[0.5rem] text-[1.2rem]">
                Picked based on your preference and selections
              </h5>
            </div>
          )}
        </div>

        <div>
          {Array.isArray(searchJobsList) && searchJobsList.length > 0 && (
            <div className="flex gap-10 items-center justify-end pb-[1.5rem]">
              <button
                className="cursor-pointer flex gap-3 hover:text-[#009A4B]"
                onClick={handleChangeGrid}
              >
                <List />
                <h5>List View</h5>
              </button>
              <button
                className="cursor-pointer flex gap-3 hover:text-[#009A4B]"
                onClick={handleChangeGrid}
              >
                <Grid2x2 />
                <h5>Grid View</h5>
              </button>
            </div>
          )}

          <div
            className="gap-8 grid"
            style={{
              gridTemplateColumns: isGrid ? "1fr 1fr 1fr" : "1fr",
            }}
          >
            {searchJobsList.length === 0 ? (
              <div className="flex items-center justify-center">
                No Results Found. Please Get Back!
              </div>
            ) : (
              searchJobsList.map((job: Job) => (
                <JobCard key={job.id} job={job} isGrid={isGrid} />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchJobsPage;
