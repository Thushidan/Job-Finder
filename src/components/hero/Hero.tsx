import type { HeroProps } from "../../types/component.types";
import heroBg from '../../assets/images/hero-graffiti.svg';
import swan from '../../assets/logos/swan.svg';
import { Link } from "react-router-dom";

const Hero = (props: HeroProps) => {
  return (
    <div className="relative bg-[#F3F3F3] flex w-full mb-[3rem]">
      {
        props.isHero && (
          <div className="py-[8.5rem] px-[3rem] lg:w-[50%] md:w-[50%] sm:w-[100%]">
            <div>
              <h1 className="font-semibold text-[2rem] leading-[1.5rem]">{props.titleOne}</h1>
              <h1 className="font-bold text-[2.5rem] text-[#009A4B]">{props.titleTwo}</h1>
            </div>
            <h5 className="text-[#676767] text-[1.5rem] pt-[1rem]">{props.description}</h5>
            
          </div>
        )
      }

      {
        props.isAddNewJob && (
          <div className="pt-[8.5rem] pb-[6rem] px-[3rem] lg:w-[50%] sm:w-[100%]">
            <h1 className="font-semibold text-[2.5rem] leading-[1.5rem]">{props.titleOne}</h1>
            <h5 className="text-[#676767] text-[1.5rem] pt-[1rem]">{props.description}</h5>
          </div>
        )                                        
      }                         

      {
        props.isFindJob && (
          <div className="pt-[8.5rem] pb-[4rem] px-[3rem] lg:w-[50%] sm:w-[100%]">
            <h1 className="font-semibold text-[2.5rem] leading-[1.5rem]">{props.titleOne}</h1>
            <h5 className="text-[#676767] text-[1.5rem] pt-[1rem] pb-[2.3rem]">{props.description}</h5>
            <Link to={'/'} className="md:w-max sm:w-[100%] bg-[linear-gradient(to_right,#009A4B_1%,#35A44C_1%,#57AB4D_16%,#6EAF4E_51%,#9EB84F_76%,#E5C651_100%)] py-[0.8rem] lg:px-[4rem] md:px-[2rem] text-[white] rounded-full h-fit text-[1.3rem] md:text[1rem] font-medium hover:bg-[linear-gradient(to_left,#009A4B_1%,#35A44C_1%,#57AB4D_16%,#6EAF4E_51%,#9EB84F_76%,#E5C651_100%)] hover:scale-105 transition-all duration-500 ease-in-out">Find Jobs</Link>
          </div>
        )
      }

      {
        props.isHero && (
          <img src={swan} alt="swan" className="absolute right-[1rem] z-1 h-[21rem] lg:opacity-100 md:opacity-100 opacity-0"/>
        )
      }

      <img src={heroBg} alt="hero-bg" className="absolute h-[-webkit-fill-available] right-0 lg:opacity-100 md:opacity-100 opacity-0"/>

    </div>
  );
}

export default Hero;