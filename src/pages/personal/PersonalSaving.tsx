import ReUsableHero from "../../reusables/ReUsableHero"
import img from "../../assets/slide2.jpg"
import ReUsableDatails from "../../reusables/ReUsableDatails"
import ReUsableDetailsType from "../../reusables/types/reusableDetailsType"
import LearnMore from "../../reusables/LearnMore"
const PersonalSaving = () => {
  const detailsData: ReUsableDetailsType = {
    top: "Saving for a rainy day, a sunny vacation, or the home of your dreams? A number of options are available to help you put away a little extra. And since EliteOceanic Savings® deposits are reinvested into the community, you’ll be supporting the financial well-being of surrounding neighborhoods while you save for the future.",
    mid: [
      {heading:"Personal Savings Accounts",body:"Take the first step toward building your personal savings by utilizing a flexible account that will accommodate your goals."},
      {heading:"Money Market Accounts",body:"Our Money Market Accounts are designed to reward higher balances with competitive interest rates."},
      {heading:"Certificates of Deposit (CDs)",body:"We offer CDs for various terms at competitive rates to help meet your investment goals and cash flow needs."},
      {heading:"Health Savings Accounts",body:"A Health Savings Account (HSA) is designed exclusively for covering medical expenses incurred by the HSA account holder and his or her dependents. HSA contributions made by an employer or employee are excluded from your income. Earnings are tax-deferred and HSA assets are not taxed if used for qualified medical expenses. Unused HSA assets may even be used for retirement."},
    {heading:"Individual Retirement Accounts",body:"Individual Retirement Accounts (IRAs) are accounts that allow for certain tax advantages and shelters while saving for retirement. We offer two types of IRAs – Traditional and Roth."}
    ],
    bottom: null
  }
  return (
<>
<ReUsableHero img={img} heading={"Savings"} height={null}/>
<ReUsableDatails detailsData={detailsData}/>
<LearnMore text={"Savings Accounts"}/>
</>  )
}

export default PersonalSaving