import { Link } from "react-router-dom"
import icon from '../assets/icons/download.svg'

const Button = ({ type, to, text, download }) => {

    if (download ) {
        return (
            <a href={to} download={to} className="inline-block">
                <span className={`button ${type}`}>
                    <img src={icon} alt="Download" />

                    {text}
                </span>
            </a>
        )
    } else {
        return (
            <Link to={to} className={`button uppercase font-bold ${type}`}>
                {text}
            </Link>
        )
    }
}

export default Button
