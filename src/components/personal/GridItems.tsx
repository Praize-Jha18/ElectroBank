import img1 from "../../assets/savings.jpg"
import img2 from "../../assets/loans.jpg"
import img3 from "../../assets/checking.jpg"
import img4 from "../../assets/investment.jpg"
import { Link } from "react-router-dom"
const GridItems = () => {
    const items: { img: string, heading: string, body: string, link: string }[] = [
        { img: img1, heading: "Checking", body: "Manage your dollars and cents with confidence.", link: "" }, {
            img: img3,
            heading: "Savings", body: "Plan for tomorrow’s expenses and commit to save.", link: ""
        },
        { img: img2, heading: "Loans", body: "Find a budget-friendly way to afford the next step.", link: "" },

        { img: img4, heading: "Investment Solutions", body: "We provide personal Investment solutions for out clients.", link: "" },
    ]
    return (
        <>
            <div className="dfAc gap-10 flex-wrap py-12 px-20 bg-slate-200 max-tab:px-16 max-mdPhone:px-10">
                {items.map((value, key) => (
                    <div className="bg-white max-tab:w-full w-80 hover:shadow-[0_0_10px_#a3a3a3] transition-shadow duration-500 ease-in-out" key={key}>
                        <div className="img" >
                            <picture><img src={value.img} className="w-full object-center object-cover h-64" alt="" /></picture>
                        </div>
                        <div className="body py-4 px-4">
                            <h1 className="">{value.heading}</h1>
                            <p className="text-stone-600 text-sm py-4">{value.body}</p>
                            <Link to={value.link} className="text-sky-500 transition-color  duration-300 ease-in-out hover:text-black">LEARN MORE</Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default GridItems