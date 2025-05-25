import type { ValidationTextProps } from "../../types/component.types";

const ValidationText = (props: ValidationTextProps) => {

  return (
    <h5 className="text-[red] text-xs ml-[15px] md:ml-[45px]">{props.text}</h5>
  );

}

export default ValidationText;;