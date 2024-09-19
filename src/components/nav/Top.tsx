import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

const Top = () => {
    const links: { link: string, body: string[] | null }[] = [
        {
            link: "Personal",
            body: [
                "Personal Checking", "Savings", "Investment Solutions",
                "Loans"
            ]
        },
        {
            link: "Business",
            body: [
                "Business Banking Solutions",
                "Business Savings Account",
                "Business Checking Account",
                "Business Loans", "Commercial Real Estate Lending"
            ]
        },
        {
            link: "Resources",
            body: [
                "Digital Assets",
                "Retirement & Spouse Program",
                "Pamm And Mam",
                "Cannabis Investments",
            ]
        },
    ]
    return (
        <div className="navbar px-4 bg-slate-100 df-jsb">
            <div className="logo">
             <Link to={"/"}><picture><img src={logo} className='h-12' alt="logo" /></picture></Link>
                
            </div>
            <div className="links dfAc gap-4">
                {links.map((value, key) =>

                (
                    <div className="relative" key={key}>
                        <Link to={""}>{value.link}</Link>
                        <div className="df-fldc absolute top-4 z-20">
                            {value.body?.map((e, v) => (

                                <Link to={"/"} key={v}>{e}

                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>)
}

export default Top