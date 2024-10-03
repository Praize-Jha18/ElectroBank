import LearnMore from "../../reusables/LearnMore"
import ReUsableDatails from "../../reusables/ReUsableDatails"
import ReUsableHero from "../../reusables/ReUsableHero"
import ReUsableDetailsType from "../../reusables/types/reusableDetailsType"

const BusinessSavingAccount = () => {
  const detailsData:ReUsableDetailsType = {
    top: "As a business owner, you understand the importance of ensuring financial stability for your organization. When you open a business savings account at EliteOceanic Savings®, you are establishing a safe place where your reserves can flourish. Plus, deposits are reinvested in the community to promote economic strength.",
    mid: [
      {heading:"Business Savings",body:"Designed for businesses that want to build a savings fund, this account ensures cash reserves are readily accessible."},
      {heading:"Business Money Market Account",body:"With this savings option, businesses that maintain higher account balances are rewarded with a higher rate of interest."},
      {heading:"Certificates of Deposit (CDs)",body:"If you are looking to maximize money and grow you business’ cash reserve, CDs are available for various terms at competitive rates."},
      {heading:"Health Savings Accounts",body:"Combat rising healthcare costs with a Health Savings Account (HSA). Designed exclusively for covering medical expenses, HSAs can provide significant tax benefits to eligible individuals. HSA contributions made by an employer or employee are excluded from income. HSA earnings are tax-deferred and HSA assets are not taxed if used for qualified medical expenses. Unused HSA assets may be used for retirement; however, they will be subject to a 20% penalty until the HSA beneficiary turns 65. If the funds are not used for medical expenses, they will be subject to income taxes."},
    ],
    bottom: null
  } 
  return (
<>
<ReUsableHero img={null} heading={"Business Savings"} height={"50vh"}/>
<ReUsableDatails detailsData={detailsData}/>
<LearnMore text={"Business Saving"}/>
</>  )
}

export default BusinessSavingAccount