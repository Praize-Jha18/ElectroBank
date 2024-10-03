import ReUsableHero from "../../reusables/ReUsableHero"
import img from "../../assets/family.jpg"
import LearnMore from "../../reusables/LearnMore"
import ReUsableDatails from "../../reusables/ReUsableDatails"
import ReUsableDetailsType from "../../reusables/types/reusableDetailsType"
const PersonalChecking = () => {
  const detailsData: ReUsableDetailsType = {
    top: "Whether you are looking to switch banks or start a new checking account, EliteOceanic Savings® offers a variety of accounts to fit your financial needs. As a local community bank, we reinvest your deposits into the communities we serve. When you choose EliteOceanic Savings, you get a great account with great service, and help the community flourish.",
    mid: [{ heading: "Completely Free Checking", body: "With no minimum balance and no monthly service charge, Completely Free Checking helps you avoid the hassle of added fees." },
    { heading: "Direct Free Checking with Interest", body: "When you have at least one direct deposit or automatic payment set up with this account, we’ll pay you competitive interest. Plus, you won’t have to worry about maintaining a minimum balance or paying a monthly service charge." },
    { heading: "High Interest Checking", body: "Designed for customers who maintain higher balances, this account offers a greater interest rate and extra benefits. By sustaining a $1,500 minimum balance, you can even avoid the low monthly fee of $6." },
    { heading: "50+ Free Checking with Interest", body: "Customers who are 50 years of age or better can enjoy this free account that features a competitive interest rate, no minimum balance requirement, and no monthly service charge." },
    { heading: "Overdraft Privilege", body: "Want to protect your checking account from accidental overdrafts? Overdraft Privilege (ODP) is designed to help you avoid high charges from merchants for returned checks and to spare you from the hassle of denied purchases and dishonored checks." }
    ], bottom: "In the event of an accidental overdraft from your checking account, Overdraft Privilege can help. Instead of automatically returning unpaid, insufficient fund items (checks, etc.) that you may have, EliteOceanic Savings® will consider, without obligation on our part, payment of your reasonable overdrafts.*"
  }
  return (
    <>
      <ReUsableHero heading="Personal Checking" img={img} height={null} />
      <ReUsableDatails detailsData={detailsData} />
      <LearnMore text={"Personal Checking"} />
    </>
  )
}

export default PersonalChecking