import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import UserFooter from './UserFooter'
import { faBell, faCreditCard, } from '@fortawesome/free-regular-svg-icons'
import { faArrowDown, faArrowsUpDown, faArrowUp, faBars, faComment, faGear, faKey, faUser } from '@fortawesome/free-solid-svg-icons'
import { heartSharp, starSharp } from 'ionicons/icons';
import { TitleUpdater } from '../../reusables/TitleUpdater'


{/* <FontAwesomeIcon icon={} />
        <FontAwesomeIcon icon={faKey} />
<FontAwesomeIcon icon={} />
<FontAwesomeIcon icon={faCreditCardFront} /> */}
const topLinks = [
    {
        to: "", link: "Wire Transfer", icon:
            <div className='bg-[#6236ff] w-12 h-12 dfAc rounded-lg'>
                <svg xmlns="http://www.w3.org/2000/svg" className=" w-6 h-6  text-white" viewBox="0 0 512 512">
                    <title>Swap Vertical</title>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M464 208L352 96 240 208M352 113.13V416M48 304l112 112 112-112M160 398V96" fill="none" stroke="currentColor" />
                </svg>

            </div>
    },
    {
        to: "", link: "Deposit", icon: <div className=" w-12 h-12 dfAc rounded-lg bg-[#1ddc70]">
            <svg xmlns="http://www.w3.org/2000/svg" className="  w-6 h-6  text-white" viewBox="0 0 512 512">
                <title>Arrow Down</title>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 268l144 144 144-144M256 392V100" fill="none" stroke="currentColor" />
            </svg> </div>
    },
    {
        to: "", link: "Inter Bank", icon:
            <div className=" w-12 h-12 dfAc rounded-lg bg-[#ff396f]">

                <svg xmlns="http://www.w3.org/2000/svg" className=" w-16 h-6 text-white" viewBox="0 0 512 512">
                    <title>Arrow Up</title>
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 244l144-144 144 144M256 120v292"></path>
                </svg>
            </div>
    },
    {
        to: "", link: "Cards", icon: <div className="bg-[#ffb400] w-12 h-12 dfAc rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className=" w-16 h-6 text-white" viewBox="0 0 512 512">
                <title>Card</title>
                <rect x="48" y="96" width="416" height="320" rx="56" ry="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></rect>
                <path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="60" d="M48 192h416M128 300h48v20h-48z"></path>
            </svg>

        </div>
    }

]
// const quickLinks = [



//     {
//         to: "", link: "Loan", icon: <svg xmlns="http://www.w3.org/2000/svg" className="ionicon s-ion-icon w-6 h-6 text-gray-600" viewBox="0 0 512 512">
//             <title>Card</title>
//             <path d="M32 376a56 56 0 0056 56h336a56 56 0 0056-56V222H32zm66-76a30 30 0 0130-30h48a30 30 0 0130 30v20a30 30 0 01-30 30h-48a30 30 0 01-30-30zM424 80H88a56 56 0 00-56 56v26h448v-26a56 56 0 00-56-56z"></path>
//         </svg>,
//     },
//     {
//         to: "", link: "Settings", icon: <svg xmlns="http://www.w3.org/2000/svg" className="ionicon s-ion-icon w-6 h-6 text-gray-600" viewBox="0 0 512 512">
//             <title>Settings</title>
//             <path d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z" stroke-linecap="round" stroke-linejoin="round" className="ionicon-fill-none ionicon-stroke-width"></path>
//         </svg>
//     },
//     {
//         to: "", link: "", icon: <svg xmlns="http://www.w3.org/2000/svg" className="ionicon s-ion-icon w-6 h-6 text-gray-600" viewBox="0 0 512 512">
//             <title>Time</title>
//             <path d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z" stroke-miterlimit="10" className="ionicon-fill-none ionicon-stroke-width"></path>
//             <path stroke-linecap="round" stroke-linejoin="round" d="M256 128v144h96" className="ionicon-fill-none ionicon-stroke-width"></path>
//         </svg>,
//     },
//     {
//         to: "", link: "", icon: <svg xmlns="http://www.w3.org/2000/svg" className="ionicon s-ion-icon w-6 h-6 text-gray-600" viewBox="0 0 512 512">
//             <title>Chatbubble</title>
//             <path d="M87.49 380c1.19-4.38-1.44-10.47-3.95-14.86a44.86 44.86 0 00-2.54-3.8 199.81 199.81 0 01-33-110C47.65 139.09 140.73 48 255.83 48 356.21 48 440 117.54 459.58 209.85a199 199 0 014.42 41.64c0 112.41-89.49 204.93-204.59 204.93-18.3 0-43-4.6-56.47-8.37s-26.92-8.77-30.39-10.11a31.09 31.09 0 00-11.12-2.07 30.71 30.71 0 00-12.09 2.43l-67.83 24.48a16 16 0 01-4.67 1.22 9.6 9.6 0 01-9.57-9.74 15.85 15.85 0 01.6-3.29z" stroke-linecap="round" stroke-miterlimit="10" className="ionicon-fill-none ionicon-stroke-width"></path>
//         </svg>,
//     },
//     {
//         to: "", link: "", icon: <svg xmlns="http://www.w3.org/2000/svg" className="ionicon s-ion-icon w-6 h-6 text-gray-600" viewBox="0 0 512 512">
//             <title>Key</title>
//             <path d="M218.1 167.17c0 13 0 25.6 4.1 37.4-43.1 50.6-156.9 184.3-167.5 194.5a20.17 20.17 0 00-6.7 15c0 8.5 5.2 16.7 9.6 21.3 6.6 6.9 34.8 33 40 28 15.4-15 18.5-19 24.8-25.2 9.5-9.3-1-28.3 2.3-36s6.8-9.2 12.5-10.4 15.8 2.9 23.7 3c8.3.1 12.8-3.4 19-9.2 5-4.6 8.6-8.9 8.7-15.6.2-9-12.8-20.9-3.1-30.4s23.7 6.2 34 5 22.8-15.5 24.1-21.6-11.7-21.8-9.7-30.7c.7-3 6.8-10 11.4-11s25 6.9 29.6 5.9c5.6-1.2 12.1-7.1 17.4-10.3A143.43 143.43 0 00401 257.55C401 180.56 337.44 128 256.73 128c-16.47 0-31.99 2.55-38.63 5.63-14.71 6.69-32.37 23.54-38 33.54-4.8 8.5-7.53 21.64-7.53 38z" className="ionicon-fill-none ionicon-stroke-width"></path>
//             <circle cx="256" cy="256" r="128" stroke-miterlimit="10" className="ionicon-fill-none ionicon-stroke-width"></circle>
//         </svg>,
//     },
// ]



const quickLinks = [
    {
      name: 'Loan',
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-8 w-8 text-gray-700"
        >
          <path d="M12 10h2v2h-2v-2zm0-4h2v2h-2v-2zm0 8h2v2h-2v-2z" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: 'Settings',
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-8 w-8 text-gray-700"
        >
          <path d="M19.43 12.57a7 7 0 0 1-9.86 0l-5.29 5.29a.5.5 0 0 1-.71-.71l5.29-5.29a7 7 0 0 1 9.86 0l5.29 5.29a.5.5 0 0 1 .71-.71l-5.29-5.29z" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: 'History',
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-8 w-8 text-gray-700"
        >
          <path d="M12 4v16h10v-8h-2v-6h-6v2h-2v-6h-6v8h-2v-8h-2v16z" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: 'Support',
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-8 w-8 text-gray-700"
        >
          <path d="M12 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-8zM13 18h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2z" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: 'Password',
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-8 w-8 text-gray-700"
        >
          <path d="M18 8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-2zM12 16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v8zm0-6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2z" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: 'Cards',
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-8 w-8 text-gray-700"
        >
          <path d="M19 22h-5v-2h5v2zm-5-4h-5v-2h5v2zm-5-4h-5v-2h5v2zm-5-4h-5v-2h5v2zm-5-2v2h5v-2h-5z" fill="currentColor" />
        </svg>
      ),
    },
  ];

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
<TitleUpdater/>
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
                    <div className="details   mx-6 p-4 bg-white rounded-tl-md rounded-tr-md">
                       <div className="df-jsb-ac">   <div className="text-[#27173E]">
                            <p className='text-base'>Ayinde Qudus</p>
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





                <div className="quickLinks flex flex-wrap justify-between gap-4 p-4">
      {quickLinks.map((value, key) => (
        <div className="w-full sm:w-1/2 md:w-1/3" key={key}>
          <Link
            to={value.name}
            className="flex flex-col items-center bg-white border border-gray-300 rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <div className="text-gray-700 mb-2 flex justify-center items-center">
              {value.svg}
            </div>
            <span className="text-gray-800 font-semibold text-center">{value.name}</span>
          </Link>
        </div>
      ))}
    </div>


                <Transaction transactions={'credit'} />
                <Transaction transactions={'debit'} />
            </div>
            <UserFooter />
        </>
    )
}

export default AccountIndex