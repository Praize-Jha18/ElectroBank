import LearnMore from "../../reusables/LearnMore"
import FlexAndEnlarge from "../../reusables/FlexAndEnlarge"

import ReUsableHero from "../../reusables/ReUsableHero"
import img from "../../assets/slide2.jpg"
import ShortNote from "../../reusables/ShortNote"
import { personalIndexData } from "../../reusables/siteData/personal/PersonalPageData"

const PersonalIndex = () => {

  return (
    <>
      <ReUsableHero heading="Personal Banking" img={img} height={null} />
      <ShortNote to="/auth/login" link="Internet Banking" body="From everyday transactions to major purchasing decisions, we’re here to ensure the reliable financial tools you need are always available." />
      <FlexAndEnlarge items={personalIndexData.items} headingFont={"font-numans"} pFont={"font-numans"} lFont={"font-numans"} />
      <LearnMore  text={"Personal Banking"}/>
    </>
  )
}

export default PersonalIndex