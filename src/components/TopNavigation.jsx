import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
                            <li key={i}><Link className={`text-white p-4 block ${active === link.name && 'bg-brown-100'}`} to={link.to}>{link.name}</Link></li>
                        )) }
                    </ul>
                </nav>
            ) : (
                <nav>
                    <ul>
                        { type.map((link, i) => (
                            <li key={i}><Link to={link.to}>{link.name}</Link></li>
                        )) }
                    </ul>
                </nav>
            ) }
            
        </>
    )
}

export default TopNavigation
