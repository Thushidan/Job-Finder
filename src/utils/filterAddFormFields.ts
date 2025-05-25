import type { ValidateFilterFieldsProps } from "../types/functions.types";

const filterAddFormFields = (props: ValidateFilterFieldsProps) => {
    const newErrors: { [key: string]: string } = {};

    if (!props.title.trim()) newErrors.title = 'Title is required';
    if (!props.company.trim()) newErrors.company = 'Company is required';
    if (!props.location.trim()) newErrors.location = 'Location is required';
    if (!props.description.trim()) newErrors.description = 'Description is required';
    if (!props.jobType.trim()) newErrors.jobType = 'Job Type is required';

    props.setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
}

export default filterAddFormFields;