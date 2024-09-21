import ReUsableHeroTH from "../../reusables/ReUsableHeroTH"
import img from "../../assets/investsolutions.jpg"
import LearnMore from "../../reusables/LearnMore"
import ReUsableMiddleSections from "../../reusables/ReUsableMiddleSections"
import ReUsableMiddleSectionsType from "../../reusables/types/reusableMiddleSectionsType"
import { faClone } from "@fortawesome/free-regular-svg-icons"
import { faBriefcase } from "@fortawesome/free-solid-svg-icons"
import { faBuromobelexperte, faHouzz } from "@fortawesome/free-brands-svg-icons"
const InvestmentSolutions = () => {
  const data:ReUsableMiddleSectionsType = {
    heading: "Our Investment Solutions",
    subheading: "Building an international investment portfolio shouldn’t involve guesswork. Together with our investment manager, Melville Douglas, we’ve developed a complete range of international investment solutions to suit your needs.",
    title: "BENEFITS OF OUR INTERNATIONAL INVESTMENT SOLUTIONS",
    body: [
        { icon:faBriefcase , heading: "Actively Managed", body: "We follow an active investment philosophy with a strong strategic bias" },
        {icon:faClone,heading:"Wide Choice",body:"Choose from a range of actively-managed international investment solutions"},
        {icon:faBuromobelexperte,heading:"Appropriate Risk",body:"We advise and help build a portfolio so you can meet your investment goals",},
        {icon:faHouzz,heading:"Proven Philosophy",body:"Our rigorous, research-driven process produces outstanding results"}
    ]

}
  return (
<>
<ReUsableHeroTH img={img} heading={"Investment Solutions"} height={null} details={"We have merged. For you, that means nothing but more of the same high levels of customer service and investment management."}/>
<ReUsableMiddleSections data={data} />
<LearnMore  text="Investment Solutions"/>
</>
  )
}

export default InvestmentSolutions