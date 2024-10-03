import ReUsableHero from '../../reusables/ReUsableHero'
import ReUsableDatails from '../../reusables/ReUsableDatails'
import LearnMore from '../../reusables/LearnMore'
import ReUsableDetailsType from '../../reusables/types/reusableDetailsType'

const BusinessCREL = () => {
    const detailsData:ReUsableDetailsType = {
              top: "Select a lending option below to learn more:",   mid: [
                {heading:"Commercial Owner-Occupied Real Estate",body:"If you’re ready to stop paying rent on your business location or want to purchase a commercial building that will house your business, we offer a variety of loans for the purchase, refinance, and improvement of owner-occupied commercial property."},
                {heading:"SBA 504 Loans",body:"The SBA 504 Loan Program helps small business owners expand their businesses through the purchase of commercial real estate or capital equipment. The SBA promotes the development of businesses by offering a number of loan programs that are tailored to the specific capital needs of growing businesses. The 504 program works by distributing the loan among three parties: the business owner (down payment), a conventional lender (bank), and a Certified Development Company (CDC)."},
                {heading:"Features",body:`May include a lower required down payment and a longer-term fixed interest rate
Designed to provide financing for the purchase of fixed assets, which usually means real estate, buildings, and machinery`},
                {heading:"Commercial Real Estate",body:"Commercial real estate (CRE) is income-producing real estate that is used solely for business purposes, such as retail centers, office complexes, hotels, and apartments. EliteOceanic Savings® can provide financing for the acquisition, development, and construction of these properties. This is typically accomplished through commercial real estate loans, which are term loans secured by commercial property rather than residential property. Depending on the property type, there are varying options for down payment, amortization, rate, and loan term."},
                {heading:"Commercial Construction",body:"As a community bank, we understand the value of investing in the Lincoln community. We provide commercial construction loans to facilitate the development of commercial real estate properties, including strip malls, residential apartments, offices, industrial facilities, hotels, and mixed-use buildings. Our local lenders can evaluate your financial situation, the value of the land you are looking to buy, and provide counsel on your project. Depending on the property type, there are varying options for down payment, amortization, rate, and loan term."},
 {heading:"Commercial Bridge Loan",body:"Commercial bridge loans are a short-term commercial real estate financing option that can provide temporary financing to help sustain cash flow until you improve, refinance, lease up, sell, or complete the construction of a commercial property."}
              ],
              bottom: null
          }
  return (
<>
<ReUsableHero img={null} heading={'Commercial Real Estate Lending'} height={"50vh"}/>
<ReUsableDatails detailsData={detailsData}/>
          <LearnMore text={'Commercial Real-estate loans'}/>
</>  )
}

export default BusinessCREL