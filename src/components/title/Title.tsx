import type { TitleProps } from "../../types/component.types";

const Title = (props: TitleProps) => {

  return (
    <h1 className="font-bold text-[2rem]">{props.title}</h1>
  );

}

export default Title