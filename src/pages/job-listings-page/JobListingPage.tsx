import { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/Navbar";
import SearchBar from "../../components/search-bar/SearchBar";
import type { Country, Job } from "../../types/interface.types";
import getAllJobs from "../../services/getAllJobs/getAllJobs";
import { Grid2x2, List, MoveUp } from "lucide-react";
import JobCard from "../../components/job-card/JobCard";
import { countries } from "../../constants/countries.data";
import { Link, useNavigate } from "react-router-dom";

const JobListingPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [isGrid, setIsGrid] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [limit] = useState(3);
  const [title, setTitle] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if(title.trim().length === 0  || company.trim().length === 0) {
      return null;
    }
    navigate(`/search/${title}/${company}`);
  }

  const handleChangeGrid = () => {
    setIsGrid(!isGrid);
    console.log(isGrid);
  };

  const changePage = () => {
    setPage((prev) => prev + 1);
    console.log(page);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    if (loading || !hasMore) return;

    if (
      window.innerHeight + window.scrollY + 10 >=
      document.documentElement.scrollHeight
    ) {
      changePage();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    getAllJobs({
      limit: limit,
      page: page,
      setHasMore: setHasMore,
      setJobs: setJobs,
      setPage: setPage,
      setLoading: setLoading,
      jobs: jobs,
      loading: loading,
    });
  }, [page]);

  return (
    <>
      <Navbar />
      <Hero
        isHero={true}
        titleOne="Find Your"
        titleTwo="Dream Jobs"
        description="Browse our latest to view, apply & post to the new jobs today!"
      />
      <SearchBar title={title} company={company} setCompany={setCompany} setTitle={setTitle} handleSearch={handleSearch}/>

      <div className="w-full grid grid-cols-[1fr_3fr] gap-6 p-[3rem] ">
        <div className="">
        <div className="p-[2rem] rounded-[1rem] border-1 border-[#E4E4E4] w-full max-w-xs h-fit">
            <h1 className="text-[1.5rem] font-semibold mb-4">Location</h1>
            <div className="flex flex-col gap-3 max-h-64 overflow-y-auto pr-2 scrollbar-thumb-[#009A4B] scrollbar-track-[#009A4B]-200">
              {countries.map((country: Country) => {
                return (
                  <div key={country.id} className="flex items-center gap-[1rem] pt-[1rem]">
                    <input
                      type="checkbox"
                      name="country"
                      id={country.name}
                      checked={selectedCountry === country.name}
                      onChange={() =>
                        setSelectedCountry((prev) =>
                          prev === country.name ? null : country.name
                        )
                      }
                      className="accent-[#009A4B] w-[30px] h-[30px] border-[#E6E6E6]"
                    />
                    <label className="flex justify-between w-full text-[1.2rem] cursor-pointer" htmlFor={country.name}>
                      <h5>{country.name}</h5>
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="px-[3rem] pl-0">
          <div className="pb-[2rem]">
            {jobs.length !== 0 && <h5 className="font-bold text-[2rem]">Job results found ... </h5>}
            <h5 className="text-[#676767] font-light pt-[0.5rem] text-[1.2rem]">Picked based on your preference and selections</h5>
          </div>

          <div>
            <div className="flex gap-10 items-center justify-end pb-[1.5rem]">
              <button
                className={`cursor-pointer flex gap-3 text-[#009A4B] ${isGrid ? "text-[#D7D7D7]" : "text-[#009A4B]"}`}
                onClick={handleChangeGrid}
              >
                <List />
                <h5>List View</h5>
              </button>
              <button
                className={`cursor-pointer flex gap-3 text-[#009A4B] ${isGrid ? "text-[#009A4B]" : "text-[#D7D7D7]"}`}
                onClick={handleChangeGrid}
              >
                <Grid2x2 />
                <h5>Grid View</h5>
              </button>
            </div>

            <div
              className="gap-8 grid"
              style={{
                gridTemplateColumns: isGrid ? "1fr 1fr 1fr" : "1fr",
              }}
            >
              {jobs.map((job: Job) => (
                <JobCard key={job.id} job={job} isGrid={isGrid} />
              ))}
            </div>
            {!hasMore && <Link to={'#'} onClick={() => window.scrollTo(0, 0)} className="bg-[#EDF8F2] px-[2rem] py-[1rem] rounded-full mt-[2rem] text-[1.2rem] text-center font-medium flex items-center justify-center gap-[1rem]"><span>You have covered all the openings !</span> <MoveUp className=""/></Link>}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobListingPage;
