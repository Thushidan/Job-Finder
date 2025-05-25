export interface Job{
    id?: string,
    title: string,
    job_type: string,
    location: string,
    posted_date: string,
    description: string,
    posted_by: string,
    company: string,
}

export interface newJob{
    title : string,
    company : string,
    location : string,
    description : string
    job_type : string,
    posted_date : string,
    posted_by : string
}

export interface Country{
    id: string,
    name: string,
}