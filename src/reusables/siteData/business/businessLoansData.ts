import ReUsableDetailsType from "../../types/reusableDetailsType";

const businessLoansData: {
    detailsData: ReUsableDetailsType, listedItems: {
        heading: string;
        list: string[];
    }, featuresBottomData: {
        bold: string;
        light: string;
    }[], featuresTopData: {
        heading: string; bold: string;
        light: string;
    }[]
} = {
    detailsData: {
        top: "Choose a business loan below to learn more:",
        mid: [
            {
                heading: "Business Lines of Credit",
                body: `Need to manage cash flow? Buy inventory? A business line of credit might be the flexible solution your business needs. Borrow up to a predefined limit and pay interest only on the money borrowed. You can draw and repay funds as you wish, as long as you don’t exceed your credit limit.
                
                Business lines of credit are typically secured by assets of the company, such as accounts receivable or inventory. In cases where a company does not have such assets to pledge as collateral, other options may include equity in real estate or non-retirement investment accounts.`
            },
            { heading: "Business Term Loans", body: "If your business needs to purchase fixed assets, such as equipment, or fund tenant improvements, a term loan can provide financing for these longer-term expenses. The term of the loan will depend on the use of the proceeds and is typically determined by the longevity of the assets being financed." },
            { heading: "SBA Guarantee Loan", body: "The SBA’s primary lending program, the 7(a) Loan Program, offers U.S government-backed term loans that can support a variety of financial needs. The program guarantees as much as 85 percent of loans up to $150,000 and 75 percent of loans greater than $150,000." },
        ],
        bottom: null
    },
    listedItems: {
        heading: "Features",
        list: ["Funds can be used to:", "Purchase or expand business", "Purchase land or buildings", "Construct or renovate a facility", "Purchase equipment, fixtures, inventory, and working capital",
            "Leasehold improvements", "Refinance business debt", "Available terms up to:", "25 years for real estate", "10 years for equipment (as long as the equipment is likely to stay useful during that time)", "7 years for working capital", "Maximum loan amount is $5 million"
        ]
    },
    featuresTopData: [
        { heading: "Easy", bold: "Takes as little as ten minutes to complete online", light: "Or drop by the bank and we’ll guide you through the application" },
        { heading: "Secure", bold: "Personal and business information is encrypted", light: "Rest assured any information you share is highly secure" },
        { heading: "Fast", bold: "Funding can be provided in as little as one business day", light: "So you get the money when you need it." },
    ], featuresBottomData: [
        { bold: "More credit options ", light: "Term loan and line of credit options through West Gate Bank and Fundation" },
        { bold: "More choices ", light: "You may get offers from West Gate Bank or Fundation" },
        { bold: "Personal service ", light: "You’ll receive friendly and professional service every step of the way" },
        { bold: "Best-in-class technology ", light: "Enjoy an accelerated and streamlined approval process and delivery of your loan (if approved)" },
    ]
}
export default businessLoansData;