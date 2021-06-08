import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import arrow from '../assets/icons/arrow-down.svg'

const TopNavigation = ({ type, active, change }) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [isOpen, setIsOpen] = useState(false)

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
            {width < change ? (
                <nav className="bg-brown-50 relative">
                    <p className="text-white p-4 flex justify-between items-center" onClick={() => setIsOpen( !isOpen )}>
                        { active }
                        <img 
                            src={arrow} 
                            alt={`${isOpen ? 'close' : 'open'} the dropdown`}
                            className={isOpen && 'transform rotate-180'} />
                    </p>
                    <ul className={`
                        absolute top-14 z-50 left-0 w-full bg-brown-50 transition overflow-hidden 
                        ${!isOpen && 'h-0'}`}>

                        { type.map((link, i) => (
                            <li key={i}><NavLink className={`text-white p-4 block`} activeClassName="bg-brown-100" to={link.to}>{link.name}</NavLink></li>
                        )) }
                    </ul>
                </nav>
            ) : (
                <nav>
                    <ul className="flex flex-row mt-5">
                        { type.map((link, i) => (
                            <li key={i} className={`border-r-2 border-brown-400 px-7 last:border-r-0 ${i == 0 && 'pl-0'}`}>
                                <NavLink className={`inline-block`} activeClassName="font-bold" to={link.to}>{link.name}</NavLink>
                            </li>
                        )) }
                    </ul>
                </nav>
            ) }
            
        </>
    )
}

TopNavigation.defaultProps = {
    change: 768
}

export default TopNavigation
