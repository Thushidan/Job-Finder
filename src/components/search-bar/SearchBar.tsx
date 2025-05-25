import { Search, Building2 } from "lucide-react";
import type { SearchBarProps } from "../../types/component.types";

const SearchBar = (props: SearchBarProps) => {
  return (
    <div className="absolute bg-[white] flex border-2 border-[#E4E4E4] ml-[3rem] mr-[3rem] rounded-full justify-between px-[2rem] pr-[1rem] 2xl:w-[65%] -mt-[6rem] z-2 items-center lg:w-[95%] md:w-[90%]">
      <div className="flex gap-5 items-center h-[5rem]">
        <div className="flex items-center gap-3 h-[5rem] pr-[3rem] border-r-2 border-[#E9E9E9]">                               
          <Search className="stroke-[#DDDDDD] lg:w-[30px] lg:h-[30px] md:w-[20px] md:h-[20px]" />
          <input value={props.title} onChange={(e) => props.setTitle(e.target.value)} className="text-[black] lg:text-[1.3rem] md:text-[1rem] leading-0 focus:outline-none placeholder:text-[#DDDDDD]" type="text" placeholder="search a job or a key word"/>
        </div>

        <div className="flex">
          <div className="flex items-center gap-3 h-[5rem]">
            <Building2 className="stroke-[#DDDDDD] lg:w-[30px] lg:h-[30px] md:w-[20px] md:h-[20px]"/>
            <input value={props.company} onChange={(e) => props.setCompany(e.target.value)} className="text-[black] lg:text-[1.3rem] md:text-[1rem] leading-0 focus:outline-none placeholder:text-[#DDDDDD]" type="text" placeholder="company name"/>
          </div>
        </div>
      </div>
      <button onClick={props.handleSearch} className="bg-[linear-gradient(to_right,#009A4B_1%,#35A44C_1%,#57AB4D_16%,#6EAF4E_51%,#9EB84F_76%,#E5C651_100%)] py-[0.8rem] lg:px-[4rem] md:px-[2rem] text-[white] rounded-full h-fit text-[1.3rem] md:text[1rem] font-medium hover:bg-[linear-gradient(to_left,#009A4B_1%,#35A44C_1%,#57AB4D_16%,#6EAF4E_51%,#9EB84F_76%,#E5C651_100%)] hover:scale-105 transition-all duration-500 ease-in-out">Find Jobs</button>

    </div>
  );
}

export default SearchBar;