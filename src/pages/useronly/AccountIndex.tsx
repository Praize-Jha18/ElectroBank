import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import UserFooter from './UserFooter'
import { faBell, faTimesCircle, } from '@fortawesome/free-regular-svg-icons'
import { faBars,  faTimes, faUser } from '@fortawesome/free-solid-svg-icons'
import { TitleUpdater } from '../../reusables/TitleUpdater'
import img from "../../assets/icon/img.png"
import img2 from "../../assets/icon/img2.png"
import img3 from "../../assets/icon/img3.png"
import img4 from "../../assets/icon/img4.png"
import img5 from "../../assets/icon/img5.png"
import img6 from "../../assets/icon/img6.png"


const topLinks = [
  {
    to: "/account/domestic-transfer", link: "Wire Transfer", icon:
      <div className='bg-[#6236ff] w-12 h-12 dfAc rounded-lg'>
        <svg xmlns="http://www.w3.org/2000/svg" className=" w-6 h-6  text-white" viewBox="0 0 512 512">
          <title>Swap Vertical</title>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M464 208L352 96 240 208M352 113.13V416M48 304l112 112 112-112M160 398V96" fill="none" stroke="currentColor" />
        </svg>

      </div>
  },
  {
    to: "/account/deposit", link: "Deposit", icon: <div className=" w-12 h-12 dfAc rounded-lg bg-[#1ddc70]">
      <svg xmlns="http://www.w3.org/2000/svg" className="  w-6 h-6  text-white" viewBox="0 0 512 512">
        <title>Arrow Down</title>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M112 268l144 144 144-144M256 392V100" fill="none" stroke="currentColor" />
      </svg> </div>
  },
  {
    to: "/account/bank-transfer", link: "Inter Bank", icon:
      <div className=" w-12 h-12 dfAc rounded-lg bg-[#ff396f]">

        <svg xmlns="http://www.w3.org/2000/svg" className=" w-16 h-6 text-white" viewBox="0 0 512 512">
          <title>Arrow Up</title>
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M112 244l144-144 144 144M256 120v292"></path>
        </svg>
      </div>
  },
  {
    to: "/account/", link: "Cards", icon: <div className="bg-[#ffb400] w-12 h-12 dfAc rounded-lg">
      <svg xmlns="http://www.w3.org/2000/svg" className=" w-16 h-6 text-white" viewBox="0 0 512 512">
        <title>Card</title>
        <rect x="48" y="96" width="416" height="320" rx="56" ry="56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></rect>
        <path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="60" d="M48 192h416M128 300h48v20h-48z"></path>
      </svg>

    </div>
  }

];

const links = [
  {
    to: "/account/loan",
    link: "Loan",
    icon: img4

  },
  {
    to: "/account/profile",
    link: "Settings",
    icon: img3

  },


  {
    to: "/account/account-statement",
    link: "History",
    icon: img2

  },

  {
    to: "/account/support",
    link: "Support",
    icon: img5

  },
  {
    to: "/account/change-password",
    link: "Password",
    icon: img6

  },
  {
    to: "/account/cards",
    link: "Cards",
    icon: img

  }
];

const drawerLinks: { text: string, link: string }[] = [
  { text: "Dashboard", link: "./" },
  { text: "My Profile", link: "./profile" },
  { text: "Change Password", link: "./change-password" },
  { text: "My Statement", link: "./account-statement" },
  { text: "Domestic Transfer", link: "./domestic-transfer" },
  { text: "Inter Bank Transfer", link: "./bank-transfer" },
  { text: "Wire Transfer", link: "./domestic-transfer" },
  { text: "Support", link: "./support" },
  { text: "Log out", link: "./logout" },
];
const AccountIndex = () => {
  const Transaction = (props: { transactions: string }) => {
    return (
      <div className="px-4">
        <div className="df-jsb-ac pb-4">
          <h3 className='text-xl font-semibold capitalize text-[#27173E]'> {props.transactions} transactions </h3>
          <Link to={"/account/account-statement"} className='text-purple-500'>View all</Link>
        </div>
        <p className='text-sm bg-white py-[1.4rem] shadow-[0_0_3px_#a3a3a3] pl-4 rounded-md text-[#27173E] font-[600] '> No {props.transactions} transactions at the moment</p>
      </div>
    )
  }
  const [nav, showNav] = useState<boolean>(true);
  // set to false later
  return (
    <>
      <TitleUpdater />
      <div className="bg-sky-500 df-jsb-ac  h-16 px-8 fixed w-full font-poppins">
        <FontAwesomeIcon icon={faBars} className='text-white h-6 cursor-pointer' onClick={() => showNav(true)} />
        <p className='text-white text-lg'>EliteOceanic Savings</p>
        <div className="icons">
          <Link to={"./account-statement"}>
            <FontAwesomeIcon icon={faBell} className='text-white h-6 ' />
          </Link>
          <Link to={"./profile"}>
            <FontAwesomeIcon icon={faUser} className='text-[#27173E] h-6 pl-6' />
          </Link>


        </div>
        <div className={`drawer absolute h-screen w-screen bg-black bg-opacity-55 top-0 bottom-0 ${nav ? "left-0" : "left-[-200rem]"} transition-all ease-in-out duration-500 `} onClick={() => showNav(false)}>
          <div className="drawerContainer bg-white h-screen inline-block" onClick={(e: React.MouseEvent<HTMLDivElement>) => {
            e.stopPropagation()
          }}>
            <div className="header px-4 dfAc gap-8 py-4">
              <FontAwesomeIcon icon={faUser} className='text-[#27173E] h-6 ' />
              <div className="pr-6">
                <p className='text-base text-[#27173E]'>John Doe</p>
                <p className='text-[#a9abad] text-sm'>Acc No:9876543210</p>
              </div>
              <FontAwesomeIcon icon={faTimes} className='text-[#6263ff] h-5 w-5 text-sm pl-2 cursor-pointer' onClick={() => showNav(false)} />
            </div>
            <div className="bg-sky-500 py-2 pl-4">
              <p className='text-sm text-white text-opacity-60'>Balance</p>
              <p className='text-3xl pt-2 mb-1 font-bold text-white'>$0.00</p>
            </div>
<div className="drawerLinks">
{drawerLinks.map((v,i)=>(
  <Link to={v.link}></Link>
))}

</div>
          </div>

        </div>
      </div>
      <div className="body bg-slate-100 pt-16  font-poppins">
        <div className="midSection bg-sky-500 pt-2">
          <div className="details   mx-4 px-4 pt-4 bg-white rounded-tl-xl rounded-tr-xl">
            <div className="df-jsb-ac">
              <div className="text-[#27173E]">
                <p className='text-base'>John Doe</p>
                <h1 className='text-3xl font-semibold pt-1 pb-3'>$0.00</h1>
                <p className='text-sm'>Ledger Balance:$0.00</p>

              </div>
              <p>1</p></div>
            <div className="border-b border-gray-300 py-2"></div>

          </div>

        </div>
        <div className="flex justify-between  px-16 mx-4 gap-4 py-4  bg-white rounded-bl-xl rounded-br-xl">
          {topLinks.map((value, key) => (
            <div key={key} className=" text-center ">

              <Link to={value.to} className="text-sm flex flex-col items-center text-[#27173E]">
                <div className="pb-2">{value.icon}</div>

                <p className='text-center'>{value.link}</p>
              </Link>
            </div>
          ))}
        </div>


        <div className="mx-4 my-6">
          <h1 className='pb-2 text-[#27173E] text-lg'>Quick Links</h1>
          <div className="flex justify-center w-full gap-x-4 max-phone:gap-x-2" >
            {links.slice(0, 3).map((link, key) => (

              <Link to={link.to} className="
              text-center w-full  flex  flex-col items-center justify-center py-5 px-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow
              " key={key}>
                {/* {link.icon} */}
                <img src={link.icon} alt="" />
                <span className="text-[13px] text-gray-600 mt-1 ">{link.link}</span>
              </Link>
            ))}
          </div>
          <div className="flex w-full justify-center gap-x-4 max-phone:gap-x-2 mt-2" >
            {links.slice(3, 6).map((link, key) => (

              <Link to={link.to} className="text-center w-full  flex  flex-col items-center justify-center py-5 px-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow" key={key}>
                {/* {link.icon} */}
                <img src={link.icon} alt="" />
                <span className="text-[13px] text-gray-600 mt-1">{link.link}</span>
              </Link>
            ))}
          </div>
        </div>



        <div className="pt-8 "></div>
        <Transaction transactions={'credit'} />
        <div className="pt-8 "></div>
        <Transaction transactions={'debit'} />
      </div>
      <UserFooter />
    </>
  )
}

export default AccountIndex;