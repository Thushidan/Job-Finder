import { useState } from "react";
import Description from "../description/Description";
import SubTitle from "../sub-title/SubTitle";
import Title from "../title/Title";
import ValidationText from "../validation-text/ValidationText";
import { Link, useNavigate } from "react-router-dom";
import { MoveLeft } from 'lucide-react';
import createNewJob from "../../services/createNewJob/createNewJob";
import type { Country, newJob } from "../../types/interface.types";
import { countries } from "../../constants/countries.data";
import useNowDate from "../../hooks/useNowDate";
import filterAddFormFields from "../../utils/filterAddFormFields";
import Alert from "../alert/Alert";
import Spinner from "../spinner/Spinner";

const AddJobForm = () => {

    const [title, setTitle] = useState<string>('');
    const [jobType, setJobType] = useState<string>('');
    const [company, setCompany] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const date = useNowDate();
    const navigate = useNavigate();
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleSubmit = () => {
        const trimmedTitle = title.trim();
        const trimmedCompany = company.trim();
        const trimmedLocation = location.trim();
        const trimmedDescription = description.trim();

        const isValid = filterAddFormFields({
            title: trimmedTitle,
            company: trimmedCompany,
            location: trimmedLocation,
            description: trimmedDescription,
            setErrors: setErrors,
            jobType: jobType
        });

        if (isValid) {
            const newJob: newJob = {
                title: trimmedTitle,
                company: trimmedCompany,
                location: trimmedLocation,
                description: trimmedDescription,
                job_type: jobType,
                posted_date: date,
                posted_by: "Tech Labs (Pvt) Ltd"
            };

            console.log(newJob);
            createNewJob({
                newJob: newJob,
                navigate: navigate,
                setIsError: setIsError,
                setIsSuccess: setIsSuccess,
                setIsLoading: setIsLoading,
                setCompany: setCompany,
                setDescription: setDescription,
                setLocation: setLocation,
                setTitle: setTitle,
            });
        } else {
            console.log('Please enter the correct details!');
            console.log(errors);
        }
    };

  return (
    <div className="px-[20px] md:px-[3rem] mb-[5rem]">

        {
            isSuccess && (
                <Alert 
                    isSuccess={true}
                    title="Success"
                    description="Please wait!!! New Job Added Successfully..."
                />
            )
        }
        {
            isError && (
                <Alert 
                    isError={true}
                    title="Error"
                    description="Please enter all the required fields"
                />
            )
        }
        {
            isLoading && (
                <div className="bg-[black]/50 fixed flex items-center justify-center top-0 left-0 z-10 w-full h-[100vh]">
                    <Spinner />
                </div>
            )
        }

        <Link to={'/'} className="flex items-center gap-4 text-[#009A4B] pb-[3rem]"><MoveLeft size={20} className="stroke-[#009A4B]" />Back to Jobs</Link>
        <div className="max-w-[90%] mx-auto ml-0">
            <div className="border-b-4 border-[#F9F9F9] pb-[1.8rem]">
                <Title title="Post a Job" />
            </div>

            <div className="py-[2.5rem] border-b-4 border-[#F9F9F9] mb-[2rem]">     
                <div className="mb-[20px] gap-[20px] w-full grid md:grid-cols-[1fr_2fr]">
                    <div className="md:py-[20px]">
                        <SubTitle title="Job Title"/>
                        <Description description="Job title must be describe at least one job"/>
                    </div>
                    <div className="lg:py-[3rem] pb-[3rem] border-b-[3px] border-b-[#CDE4C2] md:py-[1rem]">
                        <input onChange={(e) => setTitle(e.target.value)} value={title} className="md:ml-[30px] mb-[5px] w-full rounded-[30px] outline-none text-[gray] text-sm border-[#DADADA] border-[2px] px-[1.5rem] py-[0.7rem] md:w-[300px] rounded-full" placeholder="e.g. Software Engineer"/>
                        {
                            errors.title && (<ValidationText text="Title is required"/>)
                        }
                    </div>
                </div>                                  
                
                <div className="mb-[20px] gap-[20px] w-full grid md:grid-cols-[1fr_2fr]">
                    <div className="md:py-[20px]">
                        <SubTitle title="Company"/>
                        <Description description="Company must be describe at least one company"/>
                    </div>
                    <div className="py-[1rem] pb-[3rem] border-b-[3px] border-b-[#CDE4C2]">
                        <input onChange={(e) => setCompany(e.target.value)} value={company} className="md:ml-[30px] mb-[5px] w-full rounded-[30px] outline-none text-[gray] text-sm border-[#DADADA] border-[2px] px-[1.5rem] py-[0.7rem] md:w-[300px] rounded-full" placeholder="e.g. Tech Labs (Pvt) Ltd"/>
                        {
                            errors.company && (<ValidationText text="Company is required"/>)
                        }
                    </div>
                </div>                                  
                
                <div className="mb-[20px] gap-[20px] w-full grid md:grid-cols-[1fr_2fr]">
                    <div className="md:py-[20px]">
                        <SubTitle title="Job Type"/>
                        <Description description="Select Job Type"/>
                    </div>
                    <div className="py-[1rem] pb-[3rem] border-b-[3px] border-b-[#CDE4C2]">
                        <select onChange={(e) => setJobType(e.target.value)} value={jobType} name="jobType" id="jobType" className="appearance-none md:ml-[30px] mb-[5px] w-full rounded-[30px] outline-none text-[gray] text-sm border-[#DADADA] border-[2px] px-[1.5rem] py-[0.7rem] py-[10px] md:w-[300px] rounded-full">
                            <option>Select Job Type</option>
                            <option>Full-Time</option>
                            <option>Part-Time</option>
                            <option>Freelancer</option>
                        </select>
                        {
                            errors.jobType && (<ValidationText text="Job Type is required"/>)
                        }
                    </div>
                </div>      
                
                <div className="mb-[20px] gap-[20px] w-full grid md:grid-cols-[1fr_2fr]">
                    <div className="md:py-[20px]">
                        <SubTitle title="Location"/>
                        <Description description="Select at least on location"/>
                    </div>
                    <div className="py-[1rem] pb-[3rem] border-b-[3px] border-b-[#CDE4C2]">
                        <select onChange={(e) => setLocation(e.target.value)} value={location} name="lcoation" id="select" className="appearance-none md:ml-[30px] mb-[5px] w-full rounded-[30px] outline-none text-[gray] text-sm border-[#DADADA] border-[2px] px-[1.5rem] py-[0.7rem] py-[10px] md:w-[300px] rounded-full">
                            <option>Select Location</option>
                            {
                                countries.map((country: Country) => {
                                    return <option key={country.id} value={country.name}>{country.name}</option>
                                })
                            }
                        </select>
                        {
                            errors.location && (<ValidationText text="Location is required"/>)
                        }
                    </div>
                </div>      

                <div className="gap-[20px] w-full grid md:grid-cols-[1fr_2fr]">
                    <div className="md:py-[20px]">
                        <SubTitle title="Job Description"/>
                        <Description description="Give us a brief description about the job"/>
                    </div>
                    <div className="py-[1rem] pb-[3rem]">
                        <textarea onChange={(e) => setDescription(e.target.value)} value={description} className="md:ml-[2rem] mb-[5px] w-full rounded-[30px] outline-none text-[gray] text-sm border-[#DADADA] border-[2px] px-[1.5rem] py-[0.7rem] lg:w-[96%] md:w-[100%]  h-[300px] rounded-[2rem] resize-y" placeholder="Enter the job description"/>
                        {
                            errors.description && (<ValidationText text="Description is required"/>)
                        }
                    </div>
                </div>                            
            </div>
            <div className="action-btn flex justify-end gap-8">
                <button onClick={handleSubmit} className="bg-[#00773A] text-[white] text-[1.2rem] py-[0.5rem] px-[2.5rem] rounded-full hover:bg-[linear-gradient(to_left,#009A4B_1%,#35A44C_1%,#57AB4D_16%,#6EAF4E_51%,#9EB84F_76%,#E5C651_100%)] hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer">Post this job</button>
                 <Link to={'/'} className="bg-[#EDF8F2] text-[black] text-[1.2rem] py-[0.5rem] px-[2.5rem] rounded-full hover:bg-[#F8EFD0] hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer">Cancel</Link>
            </div>
        </div>
    </div>
  );

}

export default AddJobForm;