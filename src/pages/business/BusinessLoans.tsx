import LearnMore from "../../reusables/LearnMore";
import ReUsableHero from "../../reusables/ReUsableHero"

const BusinessLoans = () => {
    const detailsData = {
        top: "Choose a business loan below to learn more:",
        mid: [
            {
                heading: "Business Lines of Credit",
                body: `Need to manage cash flow? Buy inventory? A business line of credit might be the flexible solution your business needs. Borrow up to a predefined limit and pay interest only on the money borrowed. You can draw and repay funds as you wish, as long as you don’t exceed your credit limit.
                
                Business lines of credit are typically secured by assets of the company, such as accounts receivable or inventory. In cases where a company does not have such assets to pledge as collateral, other options may include equity in real estate or non-retirement investment accounts.`},
            { heading: "Business Term Loans", body: "If your business needs to purchase fixed assets, such as equipment, or fund tenant improvements, a term loan can provide financing for these longer-term expenses. The term of the loan will depend on the use of the proceeds and is typically determined by the longevity of the assets being financed." },
            { heading: "SBA Guarantee Loan", body: "The SBA’s primary lending program, the 7(a) Loan Program, offers U.S government-backed term loans that can support a variety of financial needs. The program guarantees as much as 85 percent of loans up to $150,000 and 75 percent of loans greater than $150,000." },
        ],
    }
    const listedItems: {
        heading: string;
        list: string[];
    } = {
        heading: "Features",
        list: ["Funds can be used to:", "Purchase or expand business", "Purchase land or buildings", "Construct or renovate a facility", "Purchase equipment, fixtures, inventory, and working capital",
            "Leasehold improvements", "Refinance business debt", "Available terms up to:", "25 years for real estate", "10 years for equipment (as long as the equipment is likely to stay useful during that time)", "7 years for working capital", "Maximum loan amount is $5 million"
        ]
    }
    const featuresTopData = [
        { heading: "Easy", bold: "Takes as little as ten minutes to complete online", light: "Or drop by the bank and we’ll guide you through the application" },
        { heading: "Secure", bold: "Personal and business information is encrypted", light: "Rest assured any information you share is highly secure" },
        { heading: "Fast", bold: "Funding can be provided in as little as one business day", light: "So you get the money when you need it." },
    ]
    const featuresBottomData = [
        { bold: "More credit options ", light: "Term loan and line of credit options through West Gate Bank and Fundation" },
        { bold: "More choices ", light: "You may get offers from West Gate Bank or Fundation" },
        { bold: "Personal service ", light: "You’ll receive friendly and professional service every step of the way" },
        { bold: "Best-in-class technology ", light: "Enjoy an accelerated and streamlined approval process and delivery of your loan (if approved)" },
    ]
    return (
        <>
            <ReUsableHero img={null} heading={"Business Loans"} height={"50vh"} />

            <div className="bg-purple-50 df-fldc-jc gap-4   px-[15%] max-mdLap:px-[6%] py-14 w-screen text-center">
                <p className="text-lg font-medium text-center pb-8  font-numans  leading-relaxed   text-stone-500 max-mdLap:text-lg max-mdLap:leading-[1.6] max-tab:text-base max-mdPhone:text-sm">{detailsData.top}</p>
                <div className=" df-fldc-ac gap-4 ">
                    {detailsData.mid.map((value, key) => (
                        <div key={key}>
                            <h6 className="text-2xl pb-6 text-[#3a3a3a]  font-numans">{value.heading}</h6>
                            <p className="text-lg font-medium text-center pb-8  font-numans  leading-relaxed   text-stone-500 max-mdLap:text-lg max-mdLap:leading-[1.6] max-tab:text-base max-mdPhone:text-sm" style={{ whiteSpace: 'pre-line' }}>{value.body}</p>
                        </div>
                    ))}
                </div>

                <div className="">

                    <h6 className="text-2xl pb-6 text-[#3a3a3a]  font-numans">{listedItems.heading}</h6>
                    <div className=" df-fldc-ac gap-1">
                        {
                            listedItems.list.map((value, key) => (
                                <p className="numans-paragraph" key={key}>{value}</p>
                            ))
                        }    </div>
                </div>


                <div className=" df-fldc-ac gap-6 ">
                    <h1 className="text-[#3a3a3a] text-5xl">Small Business Loans</h1>
                    <h5 className="text-lg font-semibold text-center pb-1  font-numans  leading-relaxed   text-stone-500 max-mdLap:text-lg max-mdLap:leading-[1.6] max-tab:text-base max-mdPhone:text-sm">Borrow at the speed of small business with our online application</h5>
                    <p className="numans-paragraph">Need working capital right now? Need to grow your business quickly?</p>
                    <p className="numans-paragraph">Through our partnership with Fundation®, we’ve streamlined our loan process and expanded the credit solutions with which we can provide you. We want to say ‘yes’ faster – and more often.</p>
                    <p className="numans-paragraph"> Click  <a href="mailto:" className="text-sky-500">Apply Now</a>  to get started.</p>
                </div>
                <div className="">
                    <h1 className="text-[#3a3a3a] font-numans text-2xl pb-4">Features</h1>
                    <div className="">
                        <div className=" df-fldc-ac gap-2 mb-4">
                            {featuresTopData.map((value, key) => (
                                <p key={key} className="numans-paragraph">
                                    {value.heading}:<span className="font-semibold">{value.bold}</span>.
                                    {value.light}
                                </p>
                            ))}
                        </div>
                        <p className="numans-paragraph"> Credit Solutions <span className="font-semibold">Powered by Fundation®</span></p>
                        <div className=" df-fldc-ac gap-2 mb-6">                            {featuresBottomData.map((value, key) => (
                            <p  key={key} className="numans-paragraph"><span className="font-semibold">{value.bold}: </span>
                                {value.light}.
                            </p>
                        ))}
                        </div>
                        <p className="numans-paragraph">Sensible.  Offers are both term loans (up to $1,000,000) and lines of credit (up to $150,000) with no pre-payment penalties and terms up to 5 years.  We only offer fully-amortizing loans – meaning you only pay interest on the outstanding balance. </p>
                    </div>
                </div>

            </div>
            <LearnMore text={"Business Loans"} />
        </>)
}

export default BusinessLoans