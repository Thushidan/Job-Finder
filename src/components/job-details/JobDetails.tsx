import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import getJob from "../../services/getJob/getJob";
import type { Job } from "../../types/interface.types";
import { Calendar, Circle, MapPin, MoveLeft } from "lucide-react";
import jobImage from '../../assets/logos/client logo.svg';

const JobDetails = () => {

    const { jobId } = useParams();
    const [job, setJob] = useState<Job>({
        description: '',
        job_type: '',
        location: '',
        posted_by: '',
        posted_date: '',
        title: '',
        id: '',
        company: ''
    });

    const getDetails = () => {
        getJob({
            setJob: setJob,
            jobId: jobId
        });
    }

    useEffect(() => {
        getDetails();
    }, []);

    return (
        <div className="px-[3rem]">

            <Link to={'/'} className="flex items-center w-fit gap-4 text-[#009A4B] pb-[3rem]"><MoveLeft size={20} className="stroke-[#009A4B]" />Back to Jobs</Link>

            <div className="md:flex w-[100%] sm:flex-col md:flex-row items-end border-b-4 border-b-[#F9F9F9] pb-[2rem]">
                <div className="flex items-center gap-[2rem] w-[100%]">
                    <img src={jobImage} alt="job-image" className=""/>
                    <div className="flex flex-col gap-[0.7rem]">
                        <h1 className="font-bold text-[1.8rem]">{job.title}</h1>
                        <div className="flex items-center gap-[1.5rem] flex-wrap">
                            <div className="flex items-center gap-[0.5rem]">
                                <Circle strokeWidth={0} className="w-[20px] h-[20px] fill-[#009A4B]"/>
                                <h5 className="text-[#949494]">{job.job_type}</h5>
                            </div>
                            <div className="flex items-center gap-[0.5rem]">
                                <MapPin className="w-[20px] h-[20px] stroke-[#009A4B]"/>
                                <h5 className="text-[#949494]">{job.location}</h5>
                            </div>
                            <div className="flex items-center gap-[0.5rem]">
                                <Calendar className="w-[20px] h-[20px] stroke-[#009A4B]"/>
                                <h5 className="text-[#949494]">Posted: {job.posted_date}</h5>
                            </div>
                        </div>
                    </div>
                     
                </div>
                <div className="pt-[2.5rem]">
                    <button className="text-[black] bg-[#F8EFD0] rounded-full w-max py-[0.5rem] px-[2.5rem] text-[1.2rem] font-medium hover:bg-[#E5C651] hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer">Apply Now</button>
                </div>
                
            </div>

            <div className="md:flex flex-col lg:flex-row py-[3rem] flex justify-between">
                <div className="header-title pb-[3rem] lg:w-[50%] w-[100%]">
                    <h1 className="text-[1.8rem] font-bold pb-[1rem]">Job Description</h1>
                    <h5 className="text-[1.3rem] text-[black] font-normal">{job.description}</h5>
                </div>
                <div className="w-[] border-2 rounded-[2rem] border-[#D8D8D8] py-[1.8rem] pb-[2rem] px-[1.8rem] h-fit">
                    <h1 className="font-semibold text-[1.5rem] pb-[2rem]">About this Job</h1>
                    <div className=" flex flex-col gap-[1rem]">
                        <div className="flex items-center justify-between">
                            <h5 className="w-[15rem] text-[1.2rem] text-[#7B7B7B]">Job Posted</h5>
                            <h5 className="font-medium text-[1.2rem]">{job.posted_date}</h5>
                        </div>
                        <div className="flex items-center justify-between">
                            <h5 className="w-[15rem] text-[1.2rem] text-[#7B7B7B]">Posted By</h5>
                            <h5 className="font-medium text-[1.2rem]">{job.company}</h5>
                        </div>
                        <div className="flex items-center justify-between">
                            <h5 className="w-[15rem] text-[1.2rem] text-[#7B7B7B]">Job Type</h5>
                            <h5 className="font-medium text-[1.2rem]">{job.job_type}</h5>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

}

export default JobDetails;