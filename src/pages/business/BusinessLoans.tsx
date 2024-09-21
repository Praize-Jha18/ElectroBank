import ReUsableHero from "../../reusables/ReUsableHero"

const BusinessLoans = () => {
    const detailsData = {
        top: "Choose a business loan below to learn more:",
        mid: [
            {heading:"Business Lines of Credit",
                body:`Need to manage cash flow? Buy inventory? A business line of credit might be the flexible solution your business needs. Borrow up to a predefined limit and pay interest only on the money borrowed. You can draw and repay funds as you wish, as long as you don’t exceed your credit limit.
                
                Business lines of credit are typically secured by assets of the company, such as accounts receivable or inventory. In cases where a company does not have such assets to pledge as collateral, other options may include equity in real estate or non-retirement investment accounts.`},
            {heading:"Business Term Loans",body:"If your business needs to purchase fixed assets, such as equipment, or fund tenant improvements, a term loan can provide financing for these longer-term expenses. The term of the loan will depend on the use of the proceeds and is typically determined by the longevity of the assets being financed."},
            {heading:"SBA Guarantee Loan",body:"The SBA’s primary lending program, the 7(a) Loan Program, offers U.S government-backed term loans that can support a variety of financial needs. The program guarantees as much as 85 percent of loans up to $150,000 and 75 percent of loans greater than $150,000."},
        ],
    }
    const listedItems: {
        heading: string;
        list: string[];
    } = {
        heading: "Features",
        list: ["Funds can be used to:", "Purchase or expand business", "Purchase land or buildings", "Construct or renovate a facility", "Purchase equipment, fixtures, inventory, and working capital",
            "Leasehold improvements","Refinance business debt","Available terms up to:","25 years for real estate","10 years for equipment (as long as the equipment is likely to stay useful during that time)","7 years for working capital","Maximum loan amount is $5 million"
        ]
    }
    const bottomListedItems: {
        heading: string;
        list: string[];
    } = {
        heading: "",
        list: ["", "", "", "", ""]
    }
    return (
        <>
            <ReUsableHero img={null} heading={"Business Loans"} height={null} />

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
            
                <div className="">

                    <h6 className="text-2xl pb-6 text-[#3a3a3a]  font-numans">{listedItems.heading}</h6>
                    <div className="">
                        {
                            listedItems.list.map((value, key) => (
                                <p className="text-lg font-medium text-center pb-1  font-numans  leading-relaxed   text-stone-500 max-mdLap:text-lg max-mdLap:leading-[1.6] max-tab:text-base max-mdPhone:text-sm" key={key}>{value}</p>
                            ))
                        }    </div>
                </div>

                


            </div>
        </>)
}

export default BusinessLoans