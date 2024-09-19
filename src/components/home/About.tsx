import { Link } from "react-router-dom"
import img1 from "../../assets/home1(1).jpg"
import img2 from "../../assets/home1(2).jpg"
import img3 from "../../assets/home1(3).jpg"
import img4 from "../../assets/home1(4).jpg"

const About = () => {
    const items: {
        img: string;
        heading: string;
        top: string;
        to: string;
    }[] = [
            {
                img: img1,
                heading: "BUSINESS BANKING",
                top: "Our business banking is top notch and we help your business with the Paycheck Protection Program.",
                to: ""
            },
            {
                img: img2,
                heading: "AUTOMATED INVESTOR",
                top: "An IRA made easy. Relax and let’s do the hard work with our Premier Sea Investments. ",
                to: ""
            },
            {
                img: img3,
                heading: "HOME MORTGAGE",
                top: "Find the mortgage that fits your life. Don’t worry about your mortgage We have got you covered. ",
                to: ""
            }, {
                img: img4,
                heading: "INSURANCE",
                top: "We can help you assess your needs and choose the policies designed to protect your assets.",
                to: ""
            },
        ]
    return (
        <div className="">
            {
                items.map((value, key) => (
                    <div className="" key={key}>
                        <div className="img">
                            <picture><img src={value.img} alt={value.heading.toLowerCase()} /></picture>
                        </div>
                        <div className="details">
                            <h1>{value.heading}</h1>
                            <p>{value.top}</p>
                            <Link to={value.to}>LEARN MORE</Link>
                        </div>
                    </div>

                ))
            }

        </div>
    )
}

export default About