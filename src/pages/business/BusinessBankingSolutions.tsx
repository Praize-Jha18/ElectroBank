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
    
        Our Desktop Teller is a step above the rest, offering advanced features and functionality you won’t find with other remote capture options. Our remote deposit software will allow you and authorized co-workers to view previously scanned deposits for check research and deposit reporting purposes. You also have access to HelpDesk support that is always available to provide comprehensive web-based training to get you up and running quickly.`},
      { heading: "Merchant Card Processing", body: "Most consumers use debit or credit cards for payments. To accept those forms of payment, your business needs Merchant Card Processing. We offer a comprehensive set of payment processing services and full-service merchant card processing capabilities" },
    ],
    bottom: null
  }
  const listedItems = {
    heading: "Payment processing services include:",
    list: ["Credit card processing",
      "Equipment purchasing or leasing",
      "Check guarantee and authorization processing",
      "E-Commerce payment processing",
      "Convenient statement reconciliation"]
  }
  const bottomListedItems = {
    heading:"Full-service merchant card processing provides transaction processing capabilities including:",list:["Fraud monitoring","Reconciliation","Automatic transfer of merchant funds","Draft retrieval","Chargeback"]
  }
  // need ch
  return (
    <>
      <ReUsableHero img={null} heading={"Business Banking Solutions"} height={"50vh"} />

      <div className="bg-green-50   px-[15%] max-mdLap:px-[6%] py-14 w-screen text-center">
        <p className="text-lg font-medium text-center pb-8  font-numans  leading-relaxed   text-stone-500 max-mdLap:text-lg max-mdLap:leading-[1.6] max-tab:text-base max-mdPhone:text-sm">{detailsData.top}</p>
        <div className=" df-fldc-ac gap-4 mb-6">
          {detailsData.mid.map((value, key) => (
            <div key={key}>
              <h6 className="text-2xl pb-6 text-[#3a3a3a]  font-numans">{value.heading}</h6>
              <p className="text-lg font-medium text-center pb-8  font-numans  leading-relaxed   text-stone-500 max-mdLap:text-lg max-mdLap:leading-[1.6] max-tab:text-base max-mdPhone:text-sm" style={{ whiteSpace: 'pre-line' }}>{value.body}</p>
            </div>
          ))}
        </div>
        {detailsData.bottom && <p
          className="text-lg font-medium text-center pb-8  font-numans  leading-relaxed   text-stone-500 max-mdLap:text-lg max-mdLap:leading-[1.6] max-tab:text-base max-mdPhone:text-sm">{detailsData.bottom}</p>}
        <div className="">

          <h6 className="text-2xl pb-6 text-[#3a3a3a]  font-numans">{listedItems.heading}</h6>
          <div className="">
            {
              listedItems.list.map((value, key) => (
                <p className="text-lg font-medium text-center pb-1  font-numans  leading-relaxed   text-stone-500 max-mdLap:text-lg max-mdLap:leading-[1.6] max-tab:text-base max-mdPhone:text-sm" key={key}>{value}</p>
              ))
            }    </div>
        </div>

        <div className="py-10">

<h6 className="text-2xl pb-6 text-[#3a3a3a]  font-numans">{bottomListedItems.heading}</h6>
<div className="">
  {
    bottomListedItems.list.map((value, key) => (
      <p className="text-lg font-medium text-center pb-1  font-numans  leading-relaxed   text-stone-500 max-mdLap:text-lg max-mdLap:leading-[1.6] max-tab:text-base max-mdPhone:text-sm" key={key}>{value}</p>
    ))
  }    </div>
</div>


      </div>
      <LearnMore text={"Business Banking Solutions"} />

    </>)
}

export default BusinessBankingSolutions