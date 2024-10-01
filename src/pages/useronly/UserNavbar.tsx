import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const UserNavbar = (props:{header:string}) => {
  return (
<>
<div className="bg-sky-500 flex items-center  h-16 px-8 fixed w-full font-poppins">
    <button onClick={()=>{}}>
    <FontAwesomeIcon icon={faChevronLeft} className='text-white'/>
    </button>
    <p  className='text-white text-lg'>{props.header}</p>
</div>
</>  )
}

export default UserNavbar