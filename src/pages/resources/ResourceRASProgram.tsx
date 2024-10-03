
import ReUsableHero from '../../reusables/ReUsableHero'
import ReUsableDatails from '../../reusables/ReUsableDatails'
import LearnMore from '../../reusables/LearnMore'

const ResourceRASProgram = () => {
  return (
    <>
      <ReUsableHero img={null} heading={'Retirement and Spouse Program'} height={"50vh"} />
      <ReUsableDatails detailsData={{
        top: `Dramatic advances in healthcare have extended the lives of people in, predominantly, first-world and developed countries. That means that without adequate personal savings and/or pensions, people could easily outlive their retirement funds.

In times of economic downturn retirees may choose to “come out of retirement” and re-enter the workforce on a seasonal, part-time or full-time basis to earn income and obtain benefits, especially costly health insurance coverage.

Think EliteOceanic Savings when you think retirement. We have well structured retirement portfolio designed to suit each unique investor. Our vision for you is to retire and never worry about running out of money.`,
        mid: [{
          body: `A pension plan is a retirement plan that requires an employer to make contributions into a pool of funds set aside for a worker’s future benefit. The pool of funds is invested on the employee’s behalf, and the earnings on the investments generate income to the worker upon retirement.

In the simplest sense, retirement planning is the planning one does to be prepared for life after paid work ends, not just financially but in all aspects of life. The non-financial aspects include lifestyle choices such as how to spend time in retirement, where to live, when to completely quit working, etc. A holistic approach to retirement planning considers all these areas.`, heading: "How does retirement plan work?"
        }],
        bottom: "The emphasis one puts on retirement planning changes throughout different life stages. Early in a person’s working life, retirement planning is about setting aside enough money for retirement. During the middle of your career, it might also include setting specific income or asset targets and taking the steps to achieve them. Once you reach retirement age, you go from accumulating assets to what planners call the distribution phase. You’re no longer paying in; instead, your decades of saving are paying out."
      }} />
      <LearnMore text={'Retirement and Spouse Program'} />
    </>)
}

export default ResourceRASProgram