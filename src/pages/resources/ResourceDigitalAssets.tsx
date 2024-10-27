import ReUsableHero from '../../reusables/ReUsableHero'
import ReUsableDatails from '../../reusables/ReUsableDatails'
import LearnMore from '../../reusables/LearnMore'
import { resourceDigitalAssetsData } from '../../reusables/siteData/resources/resourcesData'

const ResourceDigitalAssets = () => {
  return (
    <>
      <ReUsableHero img={null} heading={'Cryptocurrency Investments'} height={'50vh'} /><ReUsableDatails detailsData={resourceDigitalAssetsData.detailsData} />
      <LearnMore text={'Cryptocurrency Investment'} />
    </>
  )
}

export default ResourceDigitalAssets