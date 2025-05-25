import axios from "axios";
import type { GetAllJobsProps } from "../../types/functions.types";
import { baseURL } from "../api/baseURL";

const getAllJobs = async (props: GetAllJobsProps) => {
    props.setLoading(true);
    try {
        const response = await axios.get(`${baseURL}/jobs?_page=${props.page}&_per_page=${props.limit}`);
        const newJobs = response.data.data;
        console.log(response.data.data);
        // console.log(response.data.data.reverse());

        props.setJobs((prevJobs) => {
            return [...prevJobs, ...newJobs];
        });
        props.setHasMore(newJobs.length === props.limit);
        props.setLoading(false);
    } catch (error) {
        console.log(error);
        props.setLoading(false);
    }
}

export default getAllJobs;