import type { Dispatch, SetStateAction } from "react"
import type { Job, newJob } from "./interface.types"
import type { NavigateFunction } from "react-router-dom"

export type GetAllJobsProps = {
    page: number,
    limit: number,
    loading: boolean,
    jobs: Job[],
    setPage: Dispatch<SetStateAction<number>>,
    setJobs: Dispatch<SetStateAction<Job[]>>,
    setHasMore: Dispatch<SetStateAction<boolean>>,
    setLoading: Dispatch<SetStateAction<boolean>>,
}

export type CreateNewJobProps = {
    newJob: newJob,
    navigate: NavigateFunction,
    setTitle: Dispatch<SetStateAction<string>>,
    setCompany: Dispatch<SetStateAction<string>>,
    setLocation: Dispatch<SetStateAction<string>>,
    setDescription: Dispatch<SetStateAction<string>>,
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    setIsSuccess: Dispatch<SetStateAction<boolean>>,
    setIsError: Dispatch<SetStateAction<boolean>>,
}

export type GetJobProps = {
    jobId: string | undefined,
    setJob: Dispatch<SetStateAction<Job>>
}

export type ValidateFilterFieldsProps = {
    title: string,
    company: string,
    location: string,
    description: string,
    jobType: string,
    setErrors: Dispatch<SetStateAction<{ [key: string]: string }>>
}

export type SearchJobsProps = {
    setSearchJobsList: Dispatch<SetStateAction<Job[]>>
    company?: string,
    job_type?: string,
    location?: string,
    title?: string,
}