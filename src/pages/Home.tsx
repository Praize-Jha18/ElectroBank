import Help from "../components/home/Help"
import Hero from "../components/home/Hero"
import img1 from "../assets/home1(1).jpg"
import img2 from "../assets/home1(2).jpg"
import img3 from "../assets/home1(3).jpg"
import img4 from "../assets/home1(4).jpg"
import FlexAndEnlarge from "../reusables/FlexAndEnlarge"

const items: {
  img: string;
  heading: string;
  body: string;
  link: string;
}[] = [
  {
      img: img1,
      heading: "BUSINESS BANKING",
      body: "Our business banking is body notch and we help your business with the Paycheck Protection Program.",
      link: ""
  },
  {
      img: img2,
      heading: "AUTOMATED INVESTOR",
      body: "An IRA made easy. Relax and let’s do the hard work with our Premier Sea Investments. ",
      link: ""
  },
  {
      img: img3,
      heading: "HOME MORTGAGE",
      body: "Find the mortgage that fits your life. Don’t worry about your mortgage We have got you covered. ",
      link: ""
  }, {
      img: img4,
      heading: "INSURANCE",
      body: "We can help you assess your needs and choose the policies designed to protect your assets.",
      link: ""
  },
]
const Home = () => {
  return (
<>
<Hero/>
<Help/>
<FlexAndEnlarge items={items} />
</>  )
}

export default Home