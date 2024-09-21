import React from 'react'
import { Link } from 'react-router-dom'
const FlexAndEnlarge = (props: { items: { img: string, heading: string, body: string, link: string }[] }) => {
  return (
    <div className="dfAc gap-10 flex-wrap py-12 px-20 bg-slate-200 max-tab:px-16 max-mdPhone:px-10">
    {props.items.map((value, key) => (
        <div className="bg-white max-tab:w-full w-80 hover:shadow-[0_0_10px_#a3a3a3] transition-shadow duration-500 ease-in-out" key={key}>
            <div className="img" >
                <picture><img src={value.img} className="w-full object-center object-cover h-64" alt={value.heading} /></picture>
            </div>
            <div className="body py-4 px-4">
                <h1 className="font-numans text-[#3a3a3a] text-xl">{value.heading}</h1>
                <p className="text-stone-600 text-sm py-4 font-numans">{value.body}</p>
                <Link to={value.link} className="text-sky-500 transition-color  duration-300 ease-in-out hover:text-black">LEARN MORE</Link>
            </div>
        </div>
    ))}
</div>  )
}

export default FlexAndEnlarge