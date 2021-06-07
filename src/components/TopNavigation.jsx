import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const TopNavigation = ({ type, active }) => {
    const [width, setWidth] = useState(window.innerWidth);

    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);

        //eslint-disable-next-line
    }, []);

    return (
        <>
            {width < 500 ? (
                <nav className="bg-brown-50 w-10/12 m-auto">
                    <p className="text-white p-4">{ active }</p>
                    <ul>
                        { type.map((link, i) => (
                            <li key={i}><NavLink className={`text-white p-4 block`} activeClassName="bg-brown-100" to={link.to}>{link.name}</NavLink></li>
                        )) }
                    </ul>
                </nav>
            ) : (
                <nav>
                    <ul className="flex flex-row mt-5">
                        { type.map((link, i) => (
                            <li key={i} className="border-r-2 border-brown-400 px-7 last:border-r-0">
                                <NavLink className={`inline-block`} activeClassName="font-bold" to={link.to}>{link.name}</NavLink>
                            </li>
                        )) }
                    </ul>
                </nav>
            ) }
            
        </>
    )
}

export default TopNavigation
