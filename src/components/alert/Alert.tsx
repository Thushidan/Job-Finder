import type { AlertProps } from "../../types/component.types";

const Alert = (props: AlertProps) => {

  return (
    <div className="fixed z-20 w-[100%] flex justify-center top-0 left-0">
        <div className="items-center flex justify-center items-center flex rounded-full px-[1rem] py-[1rem] cursor-pointer w-[50%] mx-[2rem] mt-[2rem]" style={{
            backgroundColor: props.isSuccess ? '#EDF8F2' : '#F8EFD0'}}>
        
          <h3 className="font-bold pr-[0.5rem]">{props.title} :</h3>
          <h5>{props.description}</h5>
    </div>
    </div>
    
  );

}

export default Alert;