import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ReUsableMiddleSectionsType from "./types/reusableMiddleSectionsType"

const ReUsableMiddleSections = (props: { data: ReUsableMiddleSectionsType }) => {

    return (
        <>
            <div className="text-center py-11 px-[15%]  max-mdLap:px-[6%] df-fldc-jc  w-screen bg-slate-100">
                <h1 className="font-helvetica text-5xl text-[#54595f] font-medium ">{props.data.heading}</h1>
                <p className="font-helvetica text-xl text-[#7a7a7a] py-10 px-8">{props.data.subheading}</p>
                <h1 className="font-helvetica text-2xl text-[#54595f] pb-10">{props.data.title}</h1>
                <div className="dfAc gap-2 ">
                    {props.data.body.map((value, key) => (
                        <div className="" key={key}>
                            <FontAwesomeIcon className="h-[3.15rem] w-[3.15rem]  text-sky-500" icon={value.icon} />
                            <p className="font-quicksand text-sky-500 text-xl">{value.heading}</p>
                            <p className="font-muli text-[#7a7a7a] ">{value.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>)
}

export default ReUsableMiddleSections