import ReUsableHero from "../../reusables/ReUsableHero"
import img from "../../assets/home3.jpg"
import ShortNote from "../../reusables/ShortNote"
import FlexAndEnlarge from "../../reusables/FlexAndEnlarge"
import img1 from "../../assets/account.jpg"
import img2 from "../../assets/bisloan.jpg"
import img3 from "../../assets/bisrealestate.jpg"
import LearnMore from "../../reusables/LearnMore"
const BusinessIndex = () => {
  const items: {
    img: string;
    heading: string;
    body: string;
    link: string;
  }[] = [
      {
        img: img1,
        heading: "Accounts",
        body: "Streamline day-to-day financial matters with our business checking and savings options.",
        link: ""
      },
      {
        img: img2,
        heading: "Business Loans",
        body: "Embrace growth and find new success with the supplemental financing your business needs.",
        link: ""
      },
      {
        img: img3,
        heading: "Commercial Real Estate Lending",
        body: "Find a budget-friendly way to afford the next step.",
        link: ""
      },
    ]
  return (
    <>
      <ReUsableHero heading="Business Banking" img={img} height="50vh" />
      <ShortNote to="/account/login" link="INTERNET BANKING" body="You have big goals for your business. Pair your efforts with effective financial solutions and watch ideas take shape." />
      <FlexAndEnlarge items={items} />
      <LearnMore text="Business Banking" />
    </>
  )
}

export default BusinessIndex