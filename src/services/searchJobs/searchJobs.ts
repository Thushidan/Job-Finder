import axios from "axios";
import { baseURL } from "../api/baseURL";
import type { SearchJobsProps } from "../../types/functions.types";

const searchJobs = async (props: SearchJobsProps) => {
    try {
        const response = await axios.get(`${baseURL}/jobs?company=${props.company}&title=${props.title}`);
        console.log(response.data);
        props.setSearchJobsList(response.data);
    } catch (error) {
        console.log(error);
    }
}

export default searchJobs;