import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import UserFooter from './UserFooter'
import { faBell, faCreditCard, } from '@fortawesome/free-regular-svg-icons'
import { faArrowDown, faArrowsUpDown, faArrowUp, faBars, faComment, faGear, faKey, faUser } from '@fortawesome/free-solid-svg-icons'
import { heartSharp, starSharp } from 'ionicons/icons';


{/* <FontAwesomeIcon icon={} />
        <FontAwesomeIcon icon={faKey} />
<FontAwesomeIcon icon={} />
<FontAwesomeIcon icon={faCreditCardFront} /> */}
const topLinks = [
    { to: "", link: "Wire Transfer", icon: <svg xmlns="http://www.w3.org/2000/svg" className="ionicon s-ion-icon" viewBox="0 0 512 512"><title>Swap Vertical</title><path stroke-linecap="round" stroke-linejoin="round" d="M464 208L352 96 240 208M352 113.13V416M48 304l112 112 112-112M160 398V96" className="ionicon-fill-none ionicon-stroke-width"></path></svg> },
    { to: "", link: "Deposit", icon:<svg xmlns="http://www.w3.org/2000/svg" className="ionicon s-ion-icon" viewBox="0 0 512 512"><title>Arrow Down</title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 268l144 144 144-144M256 392V100" className="ionicon-fill-none"></path></svg> },
    // { to: "", link: "Inter Bank", icon:  },
    { to: "", link: "Cards", icon: "card-outline" },
]
// const quickLinks = [
//     {to:"",link:"",icon:faCreditCard},
//     {to:"",link:"",icon:faGear},
//     {to:"",link:"",icon:faClockThree},
//     {to:"",link:"",icon:faComment},
//     {to:"",link:"",icon:},
//     {to:"",link:"",icon:},
// ]

{/* <ion-icon name="card-outline"></ion-icon> */}
const AccountIndex = () => {
    const Transaction = (props: { transactions: string }) => {
        return (
            <div className="px-4">
                <div className="df-jsb-ac pb-4">
                    <h3 className='text-xl font-semibold capitalize'> {props.transactions} transactions </h3>
                    <Link to={"/account/account_statement"} className='text-purple-500'>View all</Link>
                </div>
                <p className='text-sm bg-white py-[1.4rem] shadow-[0_0_10px_#a3a3a3] pl-4 rounded-md'> No {props.transactions} transactions at the moment</p>
            </div>
        )
    }
    return (
        <>

            <div className="bg-sky-500 df-jsb-ac  h-16 px-8 fixed w-full font-poppins">
                <FontAwesomeIcon icon={faBars} className='text-white h-6 ' />
                <p className='text-white text-lg'>EliteCity Savings</p>
                <div className="icons"  >
                    <FontAwesomeIcon icon={faBell} className='text-white h-6 ' />
                    <FontAwesomeIcon icon={faUser} className='text-[#27173E] h-6 pl-6' />
                </div>
            </div>
            <div className="body bg-slate-100 pt-16">
                <div className="midSection bg-sky-500 ">
                    <div className="details df-jsb-ac  mx-6 p-4 bg-white rounded-tl-md rounded-tr-md">
                        <div className="text-[#27173E]">
                            <p className='text-base'>Ayinde Qudus</p>
                            <h1 className='text-3xl font-semibold pt-1 pb-3'>$0.00</h1>
                            <p className='text-sm'>Ledger Balance:$0.00</p>
                        </div>
                        <p>1</p>
                    </div>
                    <div className="topLinks">
                        {topLinks.map((value, key) => (
                            <div className="">
             {value.icon}
                                  <Link className="" to={value.to}>{value.link}
                                </Link>
                            </div>))}
                    </div>
                </div>


                <div className="quickLinks">
                    {/*   {quickLinks.map((value,key)=>(
<div className="">
    <Link className="" to={value.to}>{value.link}
    </Link>
</div>                        ))}
                    </div> */}
                </div>

                <Transaction transactions={'credit'} />
                <Transaction transactions={'debit'} />
            </div>
            <UserFooter />
        </>
    )
}

export default AccountIndex