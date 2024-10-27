
import ReUsableHero from '../../reusables/ReUsableHero'
import ReUsableDatails from '../../reusables/ReUsableDatails'
import LearnMore from '../../reusables/LearnMore'
import { resourceRASProgramData } from '../../reusables/siteData/resources/resourcesData'

const ResourceRASProgram = () => {
  return (
    <>
      <ReUsableHero img={null} heading={'Retirement and Spouse Program'} height={"50vh"} />
      <ReUsableDatails detailsData={resourceRASProgramData.detailsData} />
      <LearnMore text={'Retirement and Spouse Program'} />
    </>)
}

export default ResourceRASProgram