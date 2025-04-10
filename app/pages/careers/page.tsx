import FooterTop from "@/app/Layout/FooterTop"
import CareersHeader from "../../Components/Careers/CareerHeader"
import CareerSection1 from "../../Components/Careers/CareerSection1"
import CareerSection2 from "../../Components/Careers/CareerSection2"


import News from "../../Components/News"


import Opportunities from "@/app/Components/Careers/Opportunities"

const Careers=()=> {
  return (
    <div className="text-[black]">
      <div><CareersHeader/></div>
      <CareerSection1/>
      <CareerSection2/>
      <Opportunities/>
      
      <FooterTop/>
    
    </div>
  )
}

export default Careers