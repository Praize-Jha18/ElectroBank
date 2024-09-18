import img from "../../assets/slide2.jpg"
const Hero = () => {
    return (
        //  <div style={{background:`url(${img})`}} className="bg-cover bg-fixed bg-center "> 


        // </div> 
        <div className="relative df-ac">
            <div className="img ">
                <picture>
                    <img src={img} alt="personal-bg" className="h-[70vh] w-screen object-cover" />
                </picture>
            </div>
            <div className="absolute pl-6  df-ac  bg-neutral-800 bg-opacity-70 h-full w-full">
                <h1 className="text-6xl font-semibold text-white">Personal Banking</h1>
            </div>
        </div>
    )
}

export default Hero