import React from 'react'
import UserNavbar from './UserNavbar'
import { faAmazonPay, faBitcoin, faCcPaypal, faCcVisa, faGooglePay, faPaypal, faStripe, IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Deposit = () => {
    const items: {
        text: string;
        svg: IconDefinition;
        to: string;
    }[] = [
            { text: "Stripe", svg: faStripe, to: "/account/" },
            { text: "Paypal", svg: faCcPaypal, to: "/account/" },
            { text: "BitCoin", svg: faBitcoin, to: "/account/" },
            { text: "Visa", svg: faCcVisa, to: "/account/" },
            { text: "Amazon", svg: faAmazonPay, to: "/account/" },
            { text: "Google", svg: faGooglePay, to: "/account/" },
        ]
    return (
        <>
            <UserNavbar header={'Deposit'} />
            <div className=" font-poppins pt-40 df-fldc-ac">
                <h3 className='text-[#27173E] pb-1 text-base'>Quick Announcement</h3>
                <p className='text-[#958D9E] text-base'>Please note that some methods of deposit are not available at the moment, kindly bear with us as we are currently fixing this issue.
                </p>
            </div>
            <div className="depositVia px-16">
                <h3 className=' text-[#27173E]  text-lg pt-6 pb-4'>Deposit Via</h3>
                <div className="items flex gap-x-8 gap-y-10">
                    {
                        items.map((item, key) => (
                            <Link to={item.to} key={key} className='shadow-[0_0_4px_#a3a3a3] rounded'>
                                <FontAwesomeIcon className=" text-[#27173E]" icon={item.svg} />
                                <h2 className="text-[#958D9E]">{item.text}</h2>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </>)
}

export default Deposit