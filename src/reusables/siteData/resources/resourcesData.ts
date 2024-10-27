import ReUsableDetailsType from "../../types/reusableDetailsType"

const resourceCAIData: { detailsData: ReUsableDetailsType } = {
    detailsData:
    {
        top: `
      Big institutional investors are getting increasingly high on the growth potential for products derived from the cannabis plant, more commonly known as marijuana. Bank of Montreal, in a decidedly bullish forecast, says the market could be as a large as $194 billion worldwide by 2025, should the U.S. federal government legalize cannabis, Business Insider reports.
      
      Growth like this would further boost cannabis stocks and spur more entrants. A long list of cannabis-related stocks already trade on North American exchanges and include Cronos Group Inc. (CRON), Aurora Cannabis Inc. (ACB), Canopy Growth Corp. (CGC), and Tilray Inc. (TLRY).
      
      EliteOceanic Savings is a big investor in the cannabis market, we strive to help investor make good use of funds deposited in their accounts with the help of professional fund managers for the best possible investment returns from this flourishing sector.`,
        mid: [{
            heading: "Significance For Investors", body: `What’s striking is how rapidly cannabis investments are being embraced by Wall Street and other areas. In a poll of 120 senior executives at leading private equity, venture capital (VC), hedge fund, and other institutional investment organizations, almost 33% said that the cannabis industry has the greatest growth potential this year, a close second behind technology, according to accounting firm EisnerAmper, which did the survey. The most bullish were hedge funds, with 37% putting cannabis in first place, per BI.
      
      So no wonder that money is rushing into cannabis investments of all kinds. Already, the combined market value of public cannabis stocks trading on U.S. and Canadian exchanges has ballooned to tens of billions of dollars. Also, venture capital firms invested $1.3 billion in 150 cannabis-related deals in the first half of 2019, already outstripping the $1 billion in VC money spent in all of 2018, VC deal monitor Pitchbook calculates, per BI. Private equity firms also have jumped in, investing $474 million in 19 cannabis-related transactions during 2018, and are investing at an even faster clip in 2019, according to the same sources.
      
      With this type of impressive growth, it’s no wonder that many investors are interested in investing in publicly traded cannabis stocks.`}],
        bottom: null
    }

};


const resourceDigitalAssetsData: { detailsData: ReUsableDetailsType } = {
    detailsData: {
        top: `A cryptocurrency is a digital coin, designed to be transferred between people in virtual transactions. Cryptocurrencies exist only as data and not as physical objects; you cannot actually hold a Bitcoin in your hand or keep Ethereum in your safe. Owning a Bitcoin means you have the collective agreement of each and every computer on the Bitcoin network that it is currently owned by you and – more importantly – that it was legitimately created by a miner
  
  You don’t need to be a cryptocurrency guru to earn from this sector. Our professional traders know just when to make the right calls and which coins to flip. Trades are automated with professional human supervision to make sure trades are healthy and free from errors or loss of funds.`,
        mid: [{ body: "Cryptocurrencies are handled like cash but are mined like gold. Mining is simply the process of verifying a crypto transaction. People around the world transfer e-coins from wallet to wallet, while miners use computer-processing power to maintain the blockchain and verify these transactions.", heading: "What cryptocurrency miners do" }],
        bottom: "When a new crypto is launched, its founders announce how many coins will be mined. Once the quota is reached, no further coins can be produced. The first digital coin introduced was Bitcoin, which remains today the benchmark for all other digital coins. Among other currencies that have made their way into the cryptocurrency hall-of-fame we have: Ethereum, Ripple, Litecoin, EOS, and a number of derived currencies, including Bitcoin Cash and Bitcoin Gold."
    }
};


const resourcePAMData: { detailsData: ReUsableDetailsType } = {
    detailsData: {
        top: `PAMM (Percentage Allocation Management Module) and MAM (Multi-Account Manager) accounts allow fund managers to manage multiple accounts from a single account without having to create an investment fund.

The performance (profits and losses) of a PAMM or MAM account manager is distributed among the managed accounts. The clients’ managed accounts are connected to our account manager’s main account and all trades made by the manager are reflected proportionally in the clients’ accounts.
`,
        mid: [
            { body: "ace Bank PAMM Master account balance represents the total amount of all clients’ deposits. To ensure the security of investors’ funds, client deposits remain in their own trading accounts, our managers do not have direct access to these accounts and therefore cannot make any withdrawals.", heading: "Managed Accounts" },
            {
                body: `The PAMM account features a management module that distributes the sizes of trades according to an allocation percentage. This solution is offered by many forex brokers for investors and fund managers. With a PAMM account, an investor can also allocate a percentage of h is account to one or more managers.

The manager’s PAMM account is a large “main account”, whose capital is equal to the sum of the sub-accounts.
The manager’s trades are automatically replicated in the sub-accounts according to a percentage basis. For example, if the trader makes a 100-lot trade on the EURUSD, the trade is divided among the individual sub-accounts (clients) into smaller parts based on the percentage of equity of each sub-account in relation to the master account. This means that if the size of an individual sub-account is equal to 1% of the main account’s equity, the size of the trade on this account will be 1 lot (1% of 100 lots).
`, heading: "What is a PAMM account?"
            },
            { body: "The MAM account should not be confused with the MetaQuotes multi-terminal system, which has its limitations. A MAM account allows you to use the percentage allocation method like a PAMM account, but it provides greater flexibility to allocate the trades and adjust the risk of each sub-account based on the clients’ risk profiles.", heading: "What is a MAM account?" },
        ],
        bottom: `For example, the manager can allocate trades on a fixed basis, which means that he can define the number of lots traded by each individual account. This fixed allocation can also be done using a LAMM (Lot Allocation Management Module) account.
    The manager can also change the amount of leverage applied to the sub-accounts if his clients want to take on a greater level of risk.
    `

    }
};

const resourceRASProgramData: { detailsData: ReUsableDetailsType } = {
    detailsData:{
    top: `Dramatic advances in healthcare have extended the lives of people in, predominantly, first-world and developed countries. That means that without adequate personal savings and/or pensions, people could easily outlive their retirement funds.

In times of economic downturn retirees may choose to “come out of retirement” and re-enter the workforce on a seasonal, part-time or full-time basis to earn income and obtain benefits, especially costly health insurance coverage.

Think EliteOceanic Savings when you think retirement. We have well structured retirement portfolio designed to suit each unique investor. Our vision for you is to retire and never worry about running out of money.`,
    mid: [{
      body: `A pension plan is a retirement plan that requires an employer to make contributions into a pool of funds set aside for a worker’s future benefit. The pool of funds is invested on the employee’s behalf, and the earnings on the investments generate income to the worker upon retirement.

In the simplest sense, retirement planning is the planning one does to be prepared for life after paid work ends, not just financially but in all aspects of life. The non-financial aspects include lifestyle choices such as how to spend time in retirement, where to live, when to completely quit working, etc. A holistic approach to retirement planning considers all these areas.`, heading: "How does retirement plan work?"
    }],
    bottom: "The emphasis one puts on retirement planning changes throughout different life stages. Early in a person’s working life, retirement planning is about setting aside enough money for retirement. During the middle of your career, it might also include setting specific income or asset targets and taking the steps to achieve them. Once you reach retirement age, you go from accumulating assets to what planners call the distribution phase. You’re no longer paying in; instead, your decades of saving are paying out."
  }
}

export { resourceCAIData, resourceDigitalAssetsData, resourcePAMData ,resourceRASProgramData};