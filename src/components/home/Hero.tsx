import { Link } from "react-router-dom"
import engineers from "../../assets/engineers.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
const Hero = () => {
    return (
        <>
            <div className="relative h-[80vh] dfAc">
                <div className="image">
                    <picture>
                        <img src={engineers} className="h-[80vh] w-screen object-cover" alt="" />
                    </picture>
                </div>
                <div className="details p-[4%] absolute top-0 h-[inherit] df-fldc-jc gap-6  w-screen bg-slate-800 bg-opacity-70" >
                    <div className="text-white w-[10rem]">
                        <div>
                            <span className="text-6xl">
                                PRIVATE</span></div>
                        <div>
                            <span className="font-bold text-6xl font-serif">BANKING</span>
                        </div>
                    </div>
                    <p className="text-[#a7b6c3] text-xl">Kick-start your money goals this season.
                        <br></br>Earn more and have privacy with our several premium banking offers.</p>
                    <Link to={"/auth/login"} className="bg-sky-500 transition-all  duration-500 ease-in-out inline text-white font-semibold text-center  text-md w-[15rem] py-3 hover:w-[17rem]">CREATE AN ACCOUNT! <FontAwesomeIcon className="pl-1" icon={faArrowRight} /></Link>

                </div>
                {/* Slide 2



Starting at $0

EliteCity Savings
Compare the Monthly Service Charge fees.
You could save $144/yr with Free Checking

Internet Banking */}
            </div>
        </>
    )
}

export default Hero