import { Link } from "react-router-dom"


const Login = () => {
  return (
    <>
      <div className="bg-sky-500 flex items-center h-16 px-8 fixed top-0 w-full font-poppins justify-center">
        <p className='text-white text-xl'>Login</p>
      </div>
      <form className=' bg-slate-100 h-screen pt-40'>
        <div className="px-4">
          <div className='mt-4'>
          <label htmlFor="email" className='text-[#27173E] text-xs'>Email</label>
          <input type="email" className='w-full block text-black mt-1 placeholder:text-stone-500 bg-slate-100 border-b-stone-500 border-b-[1px] pb-4 text-base outline-none' id="email" placeholder='xyz@gmail.com' />
        </div>
        <div className='mt-4'>
          <label htmlFor="password" className='text-[#27173E] text-xs'>Password</label>
          <input type="password" className='w-full block text-black mt-1 placeholder:text-stone-500 bg-slate-100 border-b-stone-500 border-b-[1px] pb-4 text-base outline-none' id="password" placeholder='Your Password' />
        </div>
        <div className="df-jsb-ac pt-4">
          <Link to={"/auth/register"} className="text-purple-500 text-base">Register</Link>
          <Link to={"/auth/login"}  className="text-[#958d9e] text-base">Forgot Password?</Link>
        </div>
        </div>
        
        <div className="fixed w-screen bottom-2 px-4  bg-white py-6">
                        <button className='btn w-full text-lg h-14'>Login</button>
                    </div>
      </form>
    </>)
}

export default Login