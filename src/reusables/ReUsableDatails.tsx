import ReUsableDetailsType from "./types/reusableDetailsType"

const ReUsableDatails = (props:{ detailsData:ReUsableDetailsType }) => {

  
    return (
        <>
            <div className="bg-green-50   px-[12%] max-mdLap:px-[6%] py-14 w-screen text-center">
                <p className="text-[1.4rem] text-center pb-8  leading-relaxed   text-stone-500 max-mdLap:text-lg max-mdLap:leading-[1.6] max-tab:text-base max-mdPhone:text-sm">{props.detailsData.top}</p>
                <div className=" df-fldc-ac gap-6 mb-6">
                    {props.detailsData.mid.map((value, key) => (
                        <div key={key}>
                            <h6 className="text-xl pb-6 text-[#3a3a3a]">{value.heading}</h6>
                            <p className="text-[1.3rem] text-center pb-8  leading-relaxed   text-stone-500 max-mdLap:text-lg max-mdLap:leading-[1.6] max-tab:text-base max-mdPhone:text-sm">{value.body}</p>
                        </div>
                    ))}
                </div>
                {props.detailsData.bottom && <p className="text-[1.4rem] text-center pb-8  leading-relaxed   text-stone-500 max-mdLap:text-lg max-mdLap:leading-[1.6] max-tab:text-base max-mdPhone:text-sm">{props.detailsData.bottom}</p>}
            </div>
        </>
    )
}

export default ReUsableDatails