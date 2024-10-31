import img1 from "../../../assets/account.jpg"
import img2 from "../../../assets/loan.jpg"
import img3 from "../../../assets/businessCREL.jpg" 
const businessIndexData:{ items: {
    img: string;
    heading: string;
    body: string;
    link: string;
  }[]} = {
    items:    [
        {
          img: img1,
          heading: "Accounts",
          body: "Streamline day-to-day financial matters with our business checking and savings options.",
          link: "/business/business-savings-account"
        },
        {
          img: img2,
          heading: "Business Loans",
          body: "Embrace growth and find new success with the supplemental financing your business needs.",
          link: "/business/business-loans"
        },
        {
          img: img3,
          heading: "Commercial Real Estate Lending",
          body: "Find a budget-friendly way to afford the next step.",
          link: "/business/commercial-real-estate-lending"
        },
      ]
}
export default businessIndexData;