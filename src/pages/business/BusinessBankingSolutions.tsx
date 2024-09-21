import LearnMore from "../../reusables/LearnMore"
import ReUsableDatails from "../../reusables/ReUsableDatails"
import ReUsableHero from "../../reusables/ReUsableHero"
import ReUsableDetailsType from "../../reusables/types/reusableDetailsType"

const BusinessBankingSolutions = () => {
  const detailsData: ReUsableDetailsType = {
    top: "Today’s economy demands that businesses maintain tighter control of their finances. Through our comprehensive range of products and services, our Business Banking Solutions team works to understand your unique challenges, and will provide you with a custom, solutions-based approach to all of your financial needs. We’ll help you manage your banking so you can focus more on your business.",
    mid: [
      { heading: "CDARS", body: "CDARS® offer depositors a combination of added security and increased convenience. Benefit from FDIC insurance coverage above $250,000 while working directly with just one financial institution. This investment option provides customers with a smart, secure, and convenient way to deposit funds." },
      { heading: "ICS", body: "Businesses that use our Insured Consumer Sweep (ICS) product will have access to coverage from many institutions, receive one regular statement, and enjoy the peace of mind that comes with knowing confidential information is protected. Plus, we ensure your funds are always easily accessible." },
      { heading: "Lock Box", body: "Does your company receive a large volume of payments from customers? With our Lock Box service, the payments made by customers are directed to a special post office box instead of going to your company. We retrieve the payments, processes them daily, and deposit the funds directly into the company’s bank account." },
      {
        heading: "Desktop Teller", body: `Desktop Teller is an innovative service that eliminates the need to bring check deposits to the bank, saving you time. Scan checks, coupons, and money orders, and electronically transmit the scanned images to the bank for posting and clearing. All you need to get started is an existing PC with internet access and a check scanner.
    \n
        Our Desktop Teller is a step above the rest, offering advanced features and functionality you won’t find with other remote capture options. Our remote deposit software will allow you and authorized co-workers to view previously scanned deposits for check research and deposit reporting purposes. You also have access to HelpDesk support that is always available to provide comprehensive web-based training to get you up and running quickly.`},
      { heading: "Merchant Card Processing", body: "Most consumers use debit or credit cards for payments. To accept those forms of payment, your business needs Merchant Card Processing. We offer a comprehensive set of payment processing services and full-service merchant card processing capabilities" },
    ],
    bottom: null
  }
  // need ch
  return (
    <>
      <ReUsableHero img={null} heading={"Business Banking Solutions"} height={"50vh"} />
      <ReUsableDatails detailsData={detailsData} />
<LearnMore text={"Business Banking Solutions"}/>

    </>)
}

export default BusinessBankingSolutions