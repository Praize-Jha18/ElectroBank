import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { CheckmarkCircleOutline } from 'react-ionicons'
import UserNavbar from './UserNavbar'
import img from '../../assets/avatar1.png'

const UserProfile = () => {

  const userDetails: { details: string, value: string }[] = [
    {
      details: "Full Name", value: "John Doe"
    },
    {
      details: "Account Number", value: "687751162"
    },
    {
      details: "Phone Number", value: "+2348123456789"
    },
    {
      details: "Email Address", value: "xyz@gmail.com"
    },
    {
      details: "Country", value: "Nigeria"
    },
    {
      details: "Occupation", value: "johndoe"
    },

  ]
  return (
    <>
      <UserNavbar header={'Profile'} />

      <div className="body bg-slate-100 font-poppins pt-24 pb-24 px-6">
        <div className=' dfAc'>
          <picture className='p-2 rounded-full shadow-[0_0_15px_rgba(0,0,0,.1)] '>
            <img src={img} alt="Avatar" className='h-24 w-24' />
          </picture>
        </div>
        <div className="details shadow-[0_0_15px_rgba(0,0,0,.1)] px-4 mt-8 rounded-xl">
          {userDetails.map((v, i) => (
            <div key={i} className='df-jsb-ac text-[#27173E]  text-base border-b border-[#958d9e] py-3'>
              <p>{v.details}</p>
              <p>{v.value} 
                <FontAwesomeIcon icon={faChevronRight} className='pl-2 text-[#958d9e]'/>
              </p>
            </div>
          ))}
           <div className='df-jsb-ac text-[#27173E]  text-base border-b border-[#958d9e] py-3'>
              <p>Registered</p>
              <p className='flex'>
               <span className='text-sm flex gap-1 text-[#a855f7]'>
                verified  <CheckmarkCircleOutline color={"#a855f7"} /></span>
                <FontAwesomeIcon icon={faChevronRight} className='pl-2 text-[#958d9e]'/>
              </p>
            </div>
            <div className="dfAc pt-2 pb-4">

            <button className='btn text-base  px-12
            py-3'>Edit Account</button>
            </div>
        </div>
      </div>
    </>)
}

export default UserProfile