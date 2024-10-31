import ReUsableHeroTH from "../../reusables/ReUsableHeroTH"
import img from "../../assets/investment.avif"
import LearnMore from "../../reusables/LearnMore"
import ReUsableMiddleSections from "../../reusables/ReUsableMiddleSections"
import {investmentSolutionsData} from "../../reusables/siteData/personal/PersonalPageData"
const InvestmentSolutions = () => {

  return (
    <>
      <ReUsableHeroTH img={img} heading={"Investment Solutions"} height={null} details={"We have merged. For you, that means nothing but more of the same high levels of customer service and investment management."} />
      <ReUsableMiddleSections data={investmentSolutionsData.data} />
      <LearnMore text="Investment Solutions" />
    </>
  )
}

export default InvestmentSolutions