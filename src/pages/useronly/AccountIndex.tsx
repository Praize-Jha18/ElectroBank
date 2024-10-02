import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import UserFooter from './UserFooter'
import { faBell, faCreditCard, } from '@fortawesome/free-regular-svg-icons'
import { faArrowDown, faArrowsUpDown, faArrowUp, faBars, faComment, faGear, faKey, faUser } from '@fortawesome/free-solid-svg-icons'
import { heartSharp, starSharp } from 'ionicons/icons';
import { TitleUpdater } from '../../reusables/TitleUpdater'
import { icon } from '@fortawesome/fontawesome-svg-core'


{/* <FontAwesomeIcon icon={} />
        <FontAwesomeIcon icon={faKey} />
<FontAwesomeIcon icon={} />
<FontAwesomeIcon icon={faCreditCardFront} /> */}
const topLinks = [
    {
        to: "/account/domestic-transfer", link: "Wire Transfer", icon:
            <div className='bg-[#6236ff] w-12 h-12 dfAc rounded-lg'>
                <svg xmlns="http://www.w3.org/2000/svg" className=" w-6 h-6  text-white" viewBox="0 0 512 512">
                    <title>Swap Vertical</title>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M464 208L352 96 240 208M352 113.13V416M48 304l112 112 112-112M160 398V96" fill="none" stroke="currentColor" />
                </svg>

            </div>
    },
    {
        to: "/account/deposit", link: "Deposit", icon: <div className=" w-12 h-12 dfAc rounded-lg bg-[#1ddc70]">
            <svg xmlns="http://www.w3.org/2000/svg" className="  w-6 h-6  text-white" viewBox="0 0 512 512">
                <title>Arrow Down</title>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 268l144 144 144-144M256 392V100" fill="none" stroke="currentColor" />
            </svg> </div>
    },
    {
        to: "/account/bank-transfer", link: "Inter Bank", icon:
            <div className=" w-12 h-12 dfAc rounded-lg bg-[#ff396f]">

                <svg xmlns="http://www.w3.org/2000/svg" className=" w-16 h-6 text-white" viewBox="0 0 512 512">
                    <title>Arrow Up</title>
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 244l144-144 144 144M256 120v292"></path>
                </svg>
            </div>
    },
    {
        to: "/account/cards", link: "Cards", icon: <div className="bg-[#ffb400] w-12 h-12 dfAc rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className=" w-16 h-6 text-white" viewBox="0 0 512 512">
                <title>Card</title>
                <rect x="48" y="96" width="416" height="320" rx="56" ry="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></rect>
                <path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="60" d="M48 192h416M128 300h48v20h-48z"></path>
            </svg>

        </div>
    }

]

const links = [
    {
        to: "/account/loan",
        link: "Loan",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="w-12 h-12 text-[#27173E]" // Add width, height, and color styling here
            >
                <title>Card</title>
                <path d="M32 376a56 56 0 0056 56h336a56 56 0 0056-56V222H32zm66-76a30 30 0 0130-30h48a30 30 0 0130 30v20a30 30 0 01-30 30h-48a30 30 0 01-30-30zM424 80H88a56 56 0 00-56 56v26h448v-26a56 56 0 00-56-56z" />
            </svg>

        ),
    },
    {
        to: "/account/profile",
        link: "Settings",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="w-12 h-12 text-[#27173E]"
            >
                <path
                    className="fill-current"
                    d="M39.23,26a16.52,16.52,0,0,0,.14-2,16.52,16.52,0,0,0-.14-2l4.33-3.39a1,1,0,0,0,.25-1.31l-4.1-7.11a1,1,0,0,0-1.25-.44l-5.11,2.06a15.68,15.68,0,0,0-3.46-2l-.77-5.43a1,1,0,0,0-1-.86H19.9a1,1,0,0,0-1,.86l-.77,5.43a15.36,15.36,0,0,0-3.46,2L9.54,9.75a1,1,0,0,0-1.25.44L4.19,17.3a1,1,0,0,0,.25,1.31L8.76,22a16.66,16.66,0,0,0-.14,2,16.52,16.52,0,0,0,.14,2L4.44,29.39a1,1,0,0,0-.25,1.31l4.1,7.11a1,1,0,0,0,1.25.44l5.11-2.06a15.68,15.68,0,0,0,3.46,2l.77,5.43a1,1,0,0,0,1,.86h8.2a1,1,0,0,0,1-.86l.77-5.43a15.36,15.36,0,0,0,3.46-2l5.11,2.06a1,1,0,0,0,1.25-.44l4.1-7.11a1,1,0,0,0-.25-1.31ZM24,31.18A7.18,7.18,0,1,1,31.17,24,7.17,7.17,0,0,1,24,31.18Z"
                />
            </svg>
        ),
    },


    {
        to: "/account/account-statement",
        link: "History",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-12 h-12 text-[#27173E]" // Tailwind classes for size and color
            >
                <title>Time</title>
                <path
                    d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z"
                    className="fill-none stroke-current"
                    strokeMiterlimit="10"
                />
                <path
                    d="M256 128v144h96"
                    className="fill-none stroke-current"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>

        ),
    },

    {
        to: "/account/support",
        link: "Support",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-12 h-12 text-[#27173E]" // Adjust height, width, and color
            >
                <title>Chatbubble</title>
                <path
                    d="M87.49 380c1.19-4.38-1.44-10.47-3.95-14.86a44.86 44.86 0 00-2.54-3.8 199.81 199.81 0 01-33-110C47.65 139.09 140.73 48 255.83 48 356.21 48 440 117.54 459.58 209.85a199 199 0 014.42 41.64c0 112.41-89.49 204.93-204.59 204.93-18.3 0-43-4.6-56.47-8.37s-26.92-8.77-30.39-10.11a31.09 31.09 0 00-11.12-2.07 30.71 30.71 0 00-12.09 2.43l-67.83 24.48a16 16 0 01-4.67 1.22 9.6 9.6 0 01-9.57-9.74 15.85 15.85 0 01.6-3.29z"
                    className="fill-none stroke-current"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                />
            </svg>

        ),
    },
    {
        to: "/account/change-password",
        link: "Password",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-12 h-12 text-[#27173E]" // Tailwind for size and color
            >
                <title>Key</title>
                <path
                    d="M218.1 167.17c0 13 0 25.6 4.1 37.4-43.1 50.6-156.9 184.3-167.5 194.5a20.17 20.17 0 00-6.7 15c0 8.5 5.2 16.7 9.6 21.3 6.6 6.9 34.8 33 40 28 15.4-15 18.5-19 24.8-25.2 9.5-9.3-1-28.3 2.3-36s6.8-9.2 12.5-10.4 15.8 2.9 23.7 3c8.3.1 12.8-3.4 19-9.2 5-4.6 8.6-8.9 8.7-15.6.2-9-12.8-20.9-3.1-30.4s23.7 6.2 34 5 22.8-15.5 24.1-21.6-11.7-21.8-9.7-30.7c.7-3 6.8-10 11.4-11s25 6.9 29.6 5.9c5.6-1.2 12.1-7.1 17.4-10.4 15.5 6.7 29.6 9.4 47.7 9.4 68.5 0 124-53.4 124-119.2S408.5 48 340 48s-121.9 53.37-121.9 119.17zM400 144a32 32 0 11-32-32 32 32 0 0132 32z"
                    className="fill-none stroke-current"
                    strokeLinejoin="round"
                />
            </svg>


        ),
    },
    {
        to: "/account/cards",
        link: "Cards",
        icon: (<svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-12 h-12 text-[#27173E]" // Tailwind for size and color
        >
            <title>Card</title>
            <rect
                x="48"
                y="96"
                width="416"
                height="320"
                rx="56"
                ry="56"
                className="fill-none stroke-current"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M48 192h416M128 300h48v20h-48z"
                className="fill-none stroke-current"
                strokeLinejoin="round"
                strokeWidth="60"
            />
        </svg>
        )
    }
];


const AccountIndex = () => {
    const Transaction = (props: { transactions: string }) => {
        return (
            <div className="px-4">
                <div className="df-jsb-ac pb-4">
                    <h3 className='text-xl font-semibold capitalize text-[#27173E]'> {props.transactions} transactions </h3>
                    <Link to={"/account/account_statement"} className='text-purple-500'>View all</Link>
                </div>
                <p className='text-sm bg-white py-[1.4rem] shadow-[0_0_3px_#a3a3a3] pl-4 rounded-md text-[#27173E] font-[600] '> No {props.transactions} transactions at the moment</p>
            </div>
        )
    }
    return (
        <>
            <TitleUpdater />
            <div className="bg-sky-500 df-jsb-ac  h-16 px-8 fixed w-full font-poppins">
                <FontAwesomeIcon icon={faBars} className='text-white h-6 ' />
                <p className='text-white text-lg'>EliteCity Savings</p>
                <div className="icons"  >
                    <FontAwesomeIcon icon={faBell} className='text-white h-6 ' />
                    <FontAwesomeIcon icon={faUser} className='text-[#27173E] h-6 pl-6' />
                </div>
            </div>
            <div className="body bg-slate-100 pt-16  font-poppins">
                <div className="midSection bg-sky-500 ">
                    <div className="details   mx-6 p-4 bg-white rounded-tl-md rounded-tr-md">
                        <div className="df-jsb-ac">   <div className="text-[#27173E]">
                            <p className='text-base'>John Doe</p>
                            <h1 className='text-3xl font-semibold pt-1 pb-3'>$0.00</h1>
                            <p className='text-sm'>Ledger Balance:$0.00</p>
                        </div>
                            <p>1</p></div>
                        <div className="border-b border-gray-300 my-4"></div>

                    </div>

                </div>
                <div className="flex   mx-6 gap-4 pb-4 bg-white rounded-bl-md rounded-br-md">
                    {topLinks.map((value, key) => (
                        <div key={key} className="w-1/3 text-center df-fldc-ac gap-2">

                            <Link to={value.to} className="text-sm  text-[#27173E]">
                                <div className="pb-2">{value.icon}</div>

                                <p className='text-center'>{value.link}</p>
                            </Link>
                        </div>
                    ))}
                </div>


                <div className="mx-6 my-6">
                    <h1 className='pb-2 text-[#27173E] text-lg'>Quick Links</h1>
                    <div className="flex flex-wrap gap-x-4 gap-y-4" >
                        {links.map((link, index) => (
                     
                                <Link to={link.to} className="text-center flex w-[32.5%] flex-col items-center justify-center py-5 px-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                                    {link.icon}
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

export default AccountIndex