import { Link } from 'react-router-dom'

const Details = () => {
    return (

        <div className="bg-green-50 df-fldc-ac px-[10%]  py-14 w-screen ">
            <p className='text-2xl text-center pb-8  leading-relaxed '>From everyday transactions to major purchasing decisions, we’re here to ensure the reliable financial tools you need are always available.</p>
            {/* check later */}
            <Link 
      to="/account/login" 
      className=" px-4 leading-[3.4rem] btn"
    >
      Internet Banking
    </Link>  </div>
    )
}

export default Details