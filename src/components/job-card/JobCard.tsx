import type { JobCardProps } from "../../types/component.types";
import jobImage from "../../assets/logos/client logo.svg";
import { Bookmark, Calendar, Circle, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const JobCard = (props: JobCardProps) => {
  if (props.isGrid) {
    return (
      <Link to={`/job/${props.job.id}`} className="relative px-[2rem] py-[2rem] pb-[2.8rem] border-1 border-[#EDEDED] rounded-[1rem]">
        <div>
          <div className="flex justify-between pb-[1.2rem]">
            <img src={jobImage} alt="job-image" />
            <Bookmark className="absolute right-[1.5rem] top-[2rem] w-[25px] h-[25px]"/>
          </div>
          <div className="pb-[1rem]">
            <h5 className="underline decoration-2 text-[1.2rem]">{props.job.company}</h5>
            <h2 className="font-semibold text-[1.3rem] pt-[0.3rem]">{props.job.title}</h2>
          </div>
          <div className="flex items-center gap-[1.5rem] flex-wrap gap-y-[1rem] pb-[2rem]">
            <div className="flex items-center gap-[0.5rem]">
              <Circle strokeWidth={0} className="w-[20px] h-[20px] fill-[#009A4B]" />
              <h5 className="text-[#949494]">{props.job.job_type}</h5>
            </div>
            <div className="flex items-center gap-[0.5rem]">
              <MapPin className="w-[20px] h-[20px] stroke-[#009A4B]" />
              <h5 className="text-[#949494]">{props.job.location}</h5>
            </div>
            <div className="flex items-center gap-[0.5rem]">
              <Calendar className="w-[20px] h-[20px] stroke-[#009A4B]" />
              <h5 className="text-[#949494]">Posted: {props.job.posted_date}</h5>
            </div>
          </div>
          <div>
            <h3 className="text-[1rem] font-medium pb-[1rem]">Job Description</h3>
            <h5 className="text-[0.9rem] text-[black] font-normal">{props.job.description}</h5>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/job/${props.job.id}`}>
    <div key={props.job.id} className="relative flex flex-col border-1 border-[#EDEDED] rounded-[1rem] px-[2rem] py-[2.5rem]">
      <div className="flex gap-[1.5rem]">
        <img src={jobImage} alt="job-image" className="h-fit"/>
        <div className="flex flex-col">
          <div className="pb-[0.9rem]">
            <h5 className="underline decoration-2 text-[1.2rem]">{props.job.company}</h5>
            <h2 className="font-semibold text-[1.5rem] pt-[0.3rem]">{props.job.title}</h2>
          </div>
          <div className="flex items-center gap-[1.5rem]">
            <div className="flex items-center gap-[0.5rem]">
              <Circle strokeWidth={0} className="w-[20px] h-[20px] fill-[#009A4B]" />
              <h5 className="text-[#949494]">{props.job.job_type}</h5>
            </div>
            <div className="flex items-center gap-[0.5rem]">
              <MapPin className="w-[20px] h-[20px] stroke-[#009A4B]" />
              <h5 className="text-[#949494]">{props.job.location}</h5>
            </div>
            <div className="flex items-center gap-[0.5rem]">
              <Calendar className="w-[20px] h-[20px] stroke-[#009A4B]" />
              <h5 className="text-[#949494]">Posted: {props.job.posted_date}</h5>
            </div>
          </div>
          <div className="pt-[3rem]">
            <h3 className="text-[1.2rem] font-medium pb-[1rem]">Job Description</h3>
            <h5 className="text-[1rem] text-[black] font-normal">{props.job.description}</h5>
          </div>
        </div>
      </div>
      <div>
        <Bookmark className="absolute right-[2rem] top-[2.5rem] w-[25px] h-[25px]"/>
      </div>
    </div>
    </Link>
  );
};

export default JobCard;
