import axios from "axios";
import type { CreateNewJobProps } from "../../types/functions.types";
import { baseURL } from "../api/baseURL";

const createNewJob = async (props: CreateNewJobProps) => {
    props.setIsLoading(true);
    try {
        const res = await axios.post(`${baseURL}/jobs`, props.newJob);
        console.log(res.data);
        props.setIsSuccess(true);
        props.setTitle('');
        props.setCompany('');
        props.setLocation('');
        props.setDescription('');
        setTimeout(() => {
            props.setIsLoading(false);
            props.setIsSuccess(false);
        }, 3000);
        setTimeout(() => {
            props.navigate('/');
        }, 4000);
    } catch (error) {
        props.setIsError(true);
        console.log(error);
        setTimeout(() => {
            props.setIsLoading(false);
            props.setIsError(false);
        }, 3000);
    }
};

export default createNewJob;
