import logo from '../assets/logos/mussen-nest-logo-dark.svg'
import { NavLink } from "react-router-dom"
import { links } from './links'

// Social media icons
import tripadvisor from '../assets/icons/social-media/tripadvisor.svg'
import { useState } from "react"

const SideNavigation = ({ openState }) => {

    const [isOpen, setIsOpen] = useState(openState)

    return (
        <div>
            <div className="h-20 w-20 bg-green-100 fixed text-center text-white z-10 cursor-pointer" onClick={() => setIsOpen(true)}>
                <h4 className="font-semibold text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-largeBodyText uppercase tracking-widest">menu</h4>
            </div>

            <nav className={`fixed w-72 h-full ${isOpen ? 'left-0' : '-left-72'} lg:left-0 transition duration-1000 top-0 bg-green-100 z-20`}>
                <div className="absolute top-4 left-6 h-10 w-10 lg:invisible cursor-pointer" onClick={() => setIsOpen(false)}>
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white w-1 h-9"></div>
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white w-1 h-9"></div>
                </div>

                <img src={logo} alt="Mussen Nest logo" className="pt-20 pb-5 pl-6" />

                <ul>
                    {links.map((link, i) => (
                        <NavLink 
                            exact={true}
                            className="flex items-center font-body justify-start px-6 py-5 gap-2 text-white"
                            activeClassName="bg-green-200" 
                            onClick={() => setIsOpen(false)} key={i} to={ link.to }>
                            <img src={link.icon} alt={`${link.name} icon`} />
                            { link.name }
                        </NavLink>
                    ))}
                </ul>

                <div className="absolute bottom-10 left-6 flex gap-6">
                    <a href="https://www.tripadvisor.co.uk/VacationRentalReview-g652238-d16674175-Rustige_Bungalow_Mussen_nest-Otterlo_Ede_Gelderland_Province.html" target="_blank"><img src={tripadvisor} alt="Tripadvisor" /></a>
                </div>
            </nav>
        </div>
        
    )
}

export default SideNavigation
