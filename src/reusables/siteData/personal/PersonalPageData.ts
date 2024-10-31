import ReUsableMiddleSectionsType from "../../types/reusableMiddleSectionsType";
import { faClone } from "@fortawesome/free-regular-svg-icons"
import { faBriefcase } from "@fortawesome/free-solid-svg-icons"
import { faBuromobelexperte, faHouzz } from "@fortawesome/free-brands-svg-icons"
import { faMoneyBill1Wave } from "@fortawesome/free-solid-svg-icons"
import { faHornbill, faSimplybuilt } from '@fortawesome/free-brands-svg-icons';
import { faCircle } from "@fortawesome/free-regular-svg-icons"

import img1 from "../../../assets/personalboy.jpg"
import img2 from "../../../assets/loan.jpg"
import img3 from "../../../assets/personalchecking.avif"
import img4 from "../../../assets/investment.avif"

import ReUsableDetailsType from "../../types/reusableDetailsType";


const personal: string = "personal";

const investmentSolutionsData: { data: ReUsableMiddleSectionsType } = {
    data: {
        heading: "Our Investment Solutions",
        subheading: "Building an international investment portfolio shouldn’t involve guesswork. Together with our investment manager, Melville Douglas, we’ve developed a complete range of international investment solutions to suit your needs.",
        title: "BENEFITS OF OUR INTERNATIONAL INVESTMENT SOLUTIONS",
        body: [
            { icon: faBriefcase, heading: "Actively Managed", body: "We follow an active investment philosophy with a strong strategic bias" },
            { icon: faClone, heading: "Wide Choice", body: "Choose from a range of actively-managed international investment solutions" },
            { icon: faBuromobelexperte, heading: "Appropriate Risk", body: "We advise and help build a portfolio so you can meet your investment goals", },
            { icon: faHouzz, heading: "Proven Philosophy", body: "Our rigorous, research-driven process produces outstanding results" }
        ]

    }
};
const loansData: { data: ReUsableMiddleSectionsType } = {
    data: {
        heading: "Personal Loans",
        subheading: "Experience a whole new world full of opportunity. Get a personal loan that offers you the flexibility and convenience to confidently pursue your life and financial goals.",
        title: "BENEFITS OF OUR PERSONAL LOANS",
        body: [
            { icon: faSimplybuilt, heading: "NO FUSS", body: "Straightforward application process as you are already a client" },
            { icon: faCircle, heading: "FLEXIBILITY", body: "Choose from our personal loans designed to meet a range of needs" },
            { icon: faMoneyBill1Wave, heading: "CURRENCY CHOICE", body: "Our loans are available in the same currency of the account, primarily sterling or US dollars" },
            { icon: faHornbill, heading: "Varying terms", body: "Our loans are available over the short to long-term and are renewable" },
        ]
    }
};
const personalCheckingData: { detailsData: ReUsableDetailsType } = {
    detailsData: {
        top: "Whether you are looking to switch banks or start a new checking account, EliteOceanic Savings® offers a variety of accounts to fit your financial needs. As a local community bank, we reinvest your deposits into the communities we serve. When you choose EliteOceanic Savings, you get a great account with great service, and help the community flourish.",
        mid: [{ heading: "Completely Free Checking", body: "With no minimum balance and no monthly service charge, Completely Free Checking helps you avoid the hassle of added fees." },
        { heading: "Direct Free Checking with Interest", body: "When you have at least one direct deposit or automatic payment set up with this account, we’ll pay you competitive interest. Plus, you won’t have to worry about maintaining a minimum balance or paying a monthly service charge." },
        { heading: "High Interest Checking", body: "Designed for customers who maintain higher balances, this account offers a greater interest rate and extra benefits. By sustaining a $1,500 minimum balance, you can even avoid the low monthly fee of $6." },
        { heading: "50+ Free Checking with Interest", body: "Customers who are 50 years of age or better can enjoy this free account that features a competitive interest rate, no minimum balance requirement, and no monthly service charge." },
        { heading: "Overdraft Privilege", body: "Want to protect your checking account from accidental overdrafts? Overdraft Privilege (ODP) is designed to help you avoid high charges from merchants for returned checks and to spare you from the hassle of denied purchases and dishonored checks." }
        ], bottom: "In the event of an accidental overdraft from your checking account, Overdraft Privilege can help. Instead of automatically returning unpaid, insufficient fund items (checks, etc.) that you may have, EliteOceanic Savings® will consider, without obligation on our part, payment of your reasonable overdrafts.*"
    }
};
const personalIndexData: { items: { img: string, heading: string, body: string, link: string }[] } = {
    items: [
        { img: img1, heading: "Checking", body: "Manage your dollars and cents with confidence.", link: `/${personal}/personal-checking` }, {
            img: img3,
            heading: "Savings", body: "Plan for tomorrow’s expenses and commit to save.", link: `/${personal}/savings`
        },
        { img: img2, heading: "Loans", body: "Find a budget-friendly way to afford the next step.", link: `/${personal}/loans` },

        { img: img4, heading: "Investment Solutions", body: "We provide personal Investment solutions for out clients.", link: `/${personal}/investment-solutions` },
    ]
};
const personalSavingData: { detailsData: ReUsableDetailsType } = {
    detailsData: {
        top: "Saving for a rainy day, a sunny vacation, or the home of your dreams? A number of options are available to help you put away a little extra. And since EliteOceanic Savings® deposits are reinvested into the community, you’ll be supporting the financial well-being of surrounding neighborhoods while you save for the future.",
        mid: [
            { heading: "Personal Savings Accounts", body: "Take the first step toward building your personal savings by utilizing a flexible account that will accommodate your goals." },
            { heading: "Money Market Accounts", body: "Our Money Market Accounts are designed to reward higher balances with competitive interest rates." },
            { heading: "Certificates of Deposit (CDs)", body: "We offer CDs for various terms at competitive rates to help meet your investment goals and cash flow needs." },
            { heading: "Health Savings Accounts", body: "A Health Savings Account (HSA) is designed exclusively for covering medical expenses incurred by the HSA account holder and his or her dependents. HSA contributions made by an employer or employee are excluded from your income. Earnings are tax-deferred and HSA assets are not taxed if used for qualified medical expenses. Unused HSA assets may even be used for retirement." },
            { heading: "Individual Retirement Accounts", body: "Individual Retirement Accounts (IRAs) are accounts that allow for certain tax advantages and shelters while saving for retirement. We offer two types of IRAs – Traditional and Roth." }
        ],
        bottom: null
    }
}
export { investmentSolutionsData, loansData, personalCheckingData, personalIndexData, personalSavingData };