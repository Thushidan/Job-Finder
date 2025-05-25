import type { DescriptionProps } from "../../types/component.types";

const Description = (props: DescriptionProps) => {

  return (
    <h5 className="text-[#676767] md:text-sm lg:text-[1.2rem] w-[85%] pt-[0.5rem]">{props.description}</h5>
  );

}

export default Description;