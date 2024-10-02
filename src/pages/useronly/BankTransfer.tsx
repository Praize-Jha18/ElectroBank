import React from 'react'
import UserNavbar from './UserNavbar'

const BankTransfer = () => {
    return (
        <>
            <UserNavbar header={'Bank Transfer'} />
            <div className="body pt-32 font-poppins bg-slate-100 h-screen">
                <h1 className='text-[#27173E] text-center text-3xl font-semibold pb-2'>Send Money</h1>
                <h3 className='text-[#27173E] text-center text-base font-medium pb-3'>Fill the form carefully</h3>
           <div className="fixed w-full bottom-16 px-4 ">
                <button className='btn w-full  text-lg h-14'>Transfer Funds</button>
            </div>
            <form>

                
            </form>
             </div>
            
        </>
    )
}

export default BankTransfer