import { Link } from "react-router-dom"

const Button = ({ type, to, text }) => {
    return (
        <Link to={to} className={`flex justify-center items-center py-3 px-5 uppercase font-body font-bold ${type}`}>
            {text}
        </Link>
    )
}

export default Button
