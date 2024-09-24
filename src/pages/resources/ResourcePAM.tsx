import LearnMore from "../../reusables/LearnMore"
import ReUsableDatails from "../../reusables/ReUsableDatails"
import ReUsableHero from "../../reusables/ReUsableHero"

const ResourcePAM = () => {
  return (
<>
<ReUsableHero img={null} heading={"Pamm And Mam"} height={"50vh"}/>
<ReUsableDatails detailsData={{
        top: `PAMM (Percentage Allocation Management Module) and MAM (Multi-Account Manager) accounts allow fund managers to manage multiple accounts from a single account without having to create an investment fund.

The performance (profits and losses) of a PAMM or MAM account manager is distributed among the managed accounts. The clients’ managed accounts are connected to our account manager’s main account and all trades made by the manager are reflected proportionally in the clients’ accounts.
`,
        mid: [
          {body:"ace Bank PAMM Master account balance represents the total amount of all clients’ deposits. To ensure the security of investors’ funds, client deposits remain in their own trading accounts, our managers do not have direct access to these accounts and therefore cannot make any withdrawals.",heading:"Managed Accounts"},
          {body:`The PAMM account features a management module that distributes the sizes of trades according to an allocation percentage. This solution is offered by many forex brokers for investors and fund managers. With a PAMM account, an investor can also allocate a percentage of h is account to one or more managers.

The manager’s PAMM account is a large “main account”, whose capital is equal to the sum of the sub-accounts.
The manager’s trades are automatically replicated in the sub-accounts according to a percentage basis. For example, if the trader makes a 100-lot trade on the EURUSD, the trade is divided among the individual sub-accounts (clients) into smaller parts based on the percentage of equity of each sub-account in relation to the master account. This means that if the size of an individual sub-account is equal to 1% of the main account’s equity, the size of the trade on this account will be 1 lot (1% of 100 lots).
`,heading:"What is a PAMM account?"},
          {body:"The MAM account should not be confused with the MetaQuotes multi-terminal system, which has its limitations. A MAM account allows you to use the percentage allocation method like a PAMM account, but it provides greater flexibility to allocate the trades and adjust the risk of each sub-account based on the clients’ risk profiles.",heading:"What is a MAM account?"},
        ],
        bottom: `For example, the manager can allocate trades on a fixed basis, which means that he can define the number of lots traded by each individual account. This fixed allocation can also be done using a LAMM (Lot Allocation Management Module) account.
        The manager can also change the amount of leverage applied to the sub-accounts if his clients want to take on a greater level of risk.
        `

      }}/>

      <LearnMore text={"Pamm and Mam"}/>
</>  )
}

export default ResourcePAM