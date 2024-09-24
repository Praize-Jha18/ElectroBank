import ReUsableHero from '../../reusables/ReUsableHero'
import ReUsableDatails from '../../reusables/ReUsableDatails'
import LearnMore from '../../reusables/LearnMore'

const ResourceDigitalAssets = () => {
  return (
    <>
    <ReUsableHero img={null} heading={'Cryptocurrency Investments'} height={'50vh'} /><ReUsableDatails detailsData={{
      top: `A cryptocurrency is a digital coin, designed to be transferred between people in virtual transactions. Cryptocurrencies exist only as data and not as physical objects; you cannot actually hold a Bitcoin in your hand or keep Ethereum in your safe. Owning a Bitcoin means you have the collective agreement of each and every computer on the Bitcoin network that it is currently owned by you and – more importantly – that it was legitimately created by a miner

You don’t need to be a cryptocurrency guru to earn from this sector. Our professional traders know just when to make the right calls and which coins to flip. Trades are automated with professional human supervision to make sure trades are healthy and free from errors or loss of funds.`,
      mid: [{body:"Cryptocurrencies are handled like cash but are mined like gold. Mining is simply the process of verifying a crypto transaction. People around the world transfer e-coins from wallet to wallet, while miners use computer-processing power to maintain the blockchain and verify these transactions.",heading:"What cryptocurrency miners do"}],
      bottom: "When a new crypto is launched, its founders announce how many coins will be mined. Once the quota is reached, no further coins can be produced. The first digital coin introduced was Bitcoin, which remains today the benchmark for all other digital coins. Among other currencies that have made their way into the cryptocurrency hall-of-fame we have: Ethereum, Ripple, Litecoin, EOS, and a number of derived currencies, including Bitcoin Cash and Bitcoin Gold."
    }} />
    <LearnMore text={'Cryptocurrency Investment'}/>
    </>
  )
}

export default ResourceDigitalAssets