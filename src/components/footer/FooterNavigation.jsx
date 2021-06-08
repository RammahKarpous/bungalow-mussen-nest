import { Link } from "react-router-dom"

const FooterNavigation = ({ title, links }) => {
    return (
        <div>
            <h3 className="text-beige-300 mb-3">{title}</h3>
            <nav>
                <ul>
                    {links.map((link, i) => (
                        <li key={i}><Link className="text-beige-300" to={link.to}>{link.name}</Link></li>
                    ))}
                </ul>  
            </nav>
        </div>
    )
}

export default FooterNavigation
