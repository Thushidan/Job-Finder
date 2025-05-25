import axios from "axios";
import { baseURL } from "../api/baseURL";
import type { GetJobProps } from "../../types/functions.types";

const getJob = async (props: GetJobProps) => {
    try {
        const response = await axios.get(`${baseURL}/jobs/${props.jobId}`);
        props.setJob(response.data);
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}

export default getJob;