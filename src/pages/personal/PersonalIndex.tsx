import LearnMore from "../../reusables/LearnMore"
import FlexAndEnlarge from "../../reusables/FlexAndEnlarge"
import img1 from "../../assets/savings.jpg"
import img2 from "../../assets/loans.jpg"
import img3 from "../../assets/checking.jpg"
import img4 from "../../assets/investment.jpg"
import ReUsableHero from "../../reusables/ReUsableHero"
import img from "../../assets/slide2.jpg"
import ShortNote from "../../reusables/ShortNote"

const PersonalIndex = () => {
  const personal: string = "personal";
  const items: { img: string, heading: string, body: string, link: string }[] = [
    { img: img1, heading: "Checking", body: "Manage your dollars and cents with confidence.", link: `/${personal}/personal-checking` }, {
      img: img3,
      heading: "Savings", body: "Plan for tomorrow’s expenses and commit to save.", link: `/${personal}/savings`
    },
    { img: img2, heading: "Loans", body: "Find a budget-friendly way to afford the next step.", link: `/${personal}/loans` },

    { img: img4, heading: "Investment Solutions", body: "We provide personal Investment solutions for out clients.", link: `/${personal}/investment-solutions` },
  ]
  return (
    <>
      <ReUsableHero heading="Personal Banking" img={img} height={null} />
      <ShortNote to="/account/login" link="Internet Banking" body="From everyday transactions to major purchasing decisions, we’re here to ensure the reliable financial tools you need are always available." />
      <FlexAndEnlarge items={items} />
      <LearnMore  text={"Personal Banking"}/>
    </>
  )
}

export default PersonalIndex