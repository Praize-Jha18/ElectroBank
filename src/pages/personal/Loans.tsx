import ReUsableHeroTH from "../../reusables/ReUsableHeroTH"
import img from "../../assets/loanBg.jpg"
import LearnMore from "../../reusables/LearnMore"
import ReUsableMiddleSections from "../../reusables/ReUsableMiddleSections"
import ReUsableMiddleSectionsType from "../../reusables/types/reusableMiddleSectionsType"
import { faMoneyBill1Wave } from "@fortawesome/free-solid-svg-icons"
import { faHornbill, faSimplybuilt } from '@fortawesome/free-brands-svg-icons';
import { faCircle } from "@fortawesome/free-regular-svg-icons"
const Loans = () => {
  const data:ReUsableMiddleSectionsType={
    heading: "Personal Loans",
    subheading: "Experience a whole new world full of opportunity. Get a personal loan that offers you the flexibility and convenience to confidently pursue your life and financial goals.",
    title: "BENEFITS OF OUR PERSONAL LOANS",
    body: [
      {icon:faSimplybuilt,heading:"NO FUSS",body:"Straightforward application process as you are already a client"},
      {icon:faCircle,heading:"FLEXIBILITY",body:"Choose from our personal loans designed to meet a range of needs"},
      {icon:faMoneyBill1Wave,heading:"CURRENCY CHOICE",body:"Our loans are available in the same currency of the account, primarily sterling or US dollars"},
      {icon:faHornbill,heading:"Varying terms",body:"Our loans are available over the short to long-term and are renewable"},
    ]
  }
  return (
<>
<ReUsableHeroTH details="Use your existing deposits or investments as collateral to secure your international loans." heading="Personal Loans" height={null} img={img}/>
<ReUsableMiddleSections data={data}/>
<LearnMore  text={"Personal loans"}/>
</>
  )
}

export default Loans