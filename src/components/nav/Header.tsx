import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  return (
    <div className="header bg-slate-300  df-jsb-ac px-8 h-14 max-nav:hidden">
      <div>
        <Link to="/about-us"className="mr-4">About Us</Link>
        <Link to="/contact-us">Contact Us</Link>
      </div>
      <div className="df-jsb-ac gap-[2rem]">
        <Link to="/auth/register">Internet Banking</Link>
        <div className="relative df-ac justify-start">

          <input type="text" className="pl-7 outline-none bg-slate-50 text-gray-700 border-[1px] border-gray-500 border-solid" name="" id="" placeholder="Search..." />
          <FontAwesomeIcon icon={faSearch} className="absolute text-gray-400 pl-2" />
        </div>
        <Link to={"/auth/login"} className="bg-sky-500 text-center text-white px-4 leading-[3.4rem]">Log in</Link>
      </div>
    </div>
  )
}

export default Header