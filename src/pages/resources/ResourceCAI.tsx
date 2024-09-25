import LearnMore from "../../reusables/LearnMore"
import ReUsableDatails from "../../reusables/ReUsableDatails"
import ReUsableHero from "../../reusables/ReUsableHero"

const ResourceCAI = () => {
  return (<>

    <ReUsableHero img={null} heading={'Cannabis Investments'} height={"50vh"} />
    <ReUsableDatails detailsData={{
      top: `
Big institutional investors are getting increasingly high on the growth potential for products derived from the cannabis plant, more commonly known as marijuana. Bank of Montreal, in a decidedly bullish forecast, says the market could be as a large as $194 billion worldwide by 2025, should the U.S. federal government legalize cannabis, Business Insider reports.

Growth like this would further boost cannabis stocks and spur more entrants. A long list of cannabis-related stocks already trade on North American exchanges and include Cronos Group Inc. (CRON), Aurora Cannabis Inc. (ACB), Canopy Growth Corp. (CGC), and Tilray Inc. (TLRY).

EliteCity Savings is a big investor in the cannabis market, we strive to help investor make good use of funds deposited in their accounts with the help of professional fund managers for the best possible investment returns from this flourishing sector.`,
      mid: [{
        heading: "Significance For Investors", body: `What’s striking is how rapidly cannabis investments are being embraced by Wall Street and other areas. In a poll of 120 senior executives at leading private equity, venture capital (VC), hedge fund, and other institutional investment organizations, almost 33% said that the cannabis industry has the greatest growth potential this year, a close second behind technology, according to accounting firm EisnerAmper, which did the survey. The most bullish were hedge funds, with 37% putting cannabis in first place, per BI.

So no wonder that money is rushing into cannabis investments of all kinds. Already, the combined market value of public cannabis stocks trading on U.S. and Canadian exchanges has ballooned to tens of billions of dollars. Also, venture capital firms invested $1.3 billion in 150 cannabis-related deals in the first half of 2019, already outstripping the $1 billion in VC money spent in all of 2018, VC deal monitor Pitchbook calculates, per BI. Private equity firms also have jumped in, investing $474 million in 19 cannabis-related transactions during 2018, and are investing at an even faster clip in 2019, according to the same sources.

With this type of impressive growth, it’s no wonder that many investors are interested in investing in publicly traded cannabis stocks.`}],
      bottom: null
    }} />
    <LearnMore text={"Cannabis Investment"} />
  </>)
}

export default ResourceCAI