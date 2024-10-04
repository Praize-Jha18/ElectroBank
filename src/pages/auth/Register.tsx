import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="bg-sky-500 flex items-center h-16 px-8 fixed w-full font-poppins justify-between">
        <div className="flex justify-center flex-grow">
          <p className='text-white text-xl'>EliteOceanic Savings</p>
        </div>
        <Link to={"/auth/login"}>

        <FontAwesomeIcon icon={faUser} className='text-[#27173E] h-8' />
        </Link>
      </div>

      <div className="body bg-slate-100 font-poppins h-screen pt-24">
        <h1 className="text-[#27173E] text-3xl text-center font-semibold">Register Now</h1>
        <form className='px-4 '>

<div className='mt-4 '>
    <label htmlFor="firstName" className='text-[#27173E] text-xs'>First Name</label>
    <input type="text" className='w-full block text-black mt-1 placeholder:text-stone-500 bg-slate-100 border-b-stone-500 border-b-[1px] h-10 text-base outline-none' id="firstName" placeholder='First Name' />
</div>
<div className='mt-4'>
    <label htmlFor="lastName" className='text-[#27173E] text-xs'>Last Name</label>
    <input type="text" className='w-full block text-black mt-1 placeholder:text-stone-500 bg-slate-100 border-b-stone-500 border-b-[1px] h-10 text-base outline-none' id="lastName" placeholder='Last Name' />
</div>
<div className='mt-4'>
    <label htmlFor="Occupation" className='text-[#27173E] text-xs'>Occupation</label>
    <input type="text" className='w-full block text-black mt-1 placeholder:text-stone-500 bg-slate-100 border-b-stone-500 border-b-[1px] h-10 text-base outline-none' id="Occupation" placeholder='Occupation' />
</div>
<div className='mt-4'>
    <label htmlFor="phoneNumber" className='text-[#27173E] text-xs'>Phone Number</label>
    <input type="tel" className='w-full block text-black mt-1 placeholder:text-stone-500 bg-slate-100 border-b-stone-500 border-b-[1px] pb-4 text-base outline-none' id="phoneNumber" placeholder='080 123 456 789' />
</div>
<div className='mt-4'>
    <label htmlFor="email" className='text-[#27173E] text-xs'>Email</label>
    <input type="email" className='w-full block text-black mt-1 placeholder:text-stone-500 bg-slate-100 border-b-stone-500 border-b-[1px] pb-4 text-base outline-none' id="email" placeholder='xyz@gmail.com' />
</div>
<div className='mt-4'>
    <label htmlFor="DOB" className='text-[#27173E] text-xs'>Date Of Birth</label>
    <input type="date" className='w-full block text-black mt-1 placeholder:text-stone-500 bg-slate-100 border-b-stone-500 border-b-[1px] pb-4 text-base outline-none' id="DOB"/>
</div>
</form>
      </div>
    </>)
}

export default Register