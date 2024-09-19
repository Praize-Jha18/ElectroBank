import Details from "../components/personal/Details"
import LearnMore from "../components/personal/LearnMore"
import FlexAndEnlarge from "../reusables/FlexAndEnlarge"
import Hero from "../components/home/Hero"
import img1 from "../assets/savings.jpg"
import img2 from "../assets/loans.jpg"
import img3 from "../assets/checking.jpg"
import img4 from "../assets/investment.jpg"
const Personal = () => {
  const items: { img: string, heading: string, body: string, link: string }[] = [
    { img: img1, heading: "Checking", body: "Manage your dollars and cents with confidence.", link: "" }, {
      img: img3,
      heading: "Savings", body: "Plan for tomorrow’s expenses and commit to save.", link: ""
    },
    { img: img2, heading: "Loans", body: "Find a budget-friendly way to afford the next step.", link: "" },

    { img: img4, heading: "Investment Solutions", body: "We provide personal Investment solutions for out clients.", link: "" },
  ]
  return (
    <>
      <Hero />
      <Details />

      <FlexAndEnlarge items={items} />
      <LearnMore />
    </>
  )
}

export default Personal