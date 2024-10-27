import LearnMore from "../../reusables/LearnMore"
import ReUsableDatails from "../../reusables/ReUsableDatails"
import ReUsableHero from "../../reusables/ReUsableHero"
import { resourcePAMData } from "../../reusables/siteData/resources/resourcesData"

const ResourcePAM = () => {
  return (
    <>
      <ReUsableHero img={null} heading={"Pamm And Mam"} height={"50vh"} />
      <ReUsableDatails detailsData={resourcePAMData.detailsData} />

      <LearnMore text={"Pamm and Mam"} />
    </>)
}

export default ResourcePAM