import { Link } from "react-router-dom"

const Button = ({ type, to, text, download }) => {

    if (download ) {
        return (
            <a href={to} download={to} className="inline-block">
                <span className={`button ${type}`}>
                    <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 17H14V15H0V17ZM14 6H10V0H4V6H0L7 13L14 6Z" className={`${type}-button-icon`} />
                    </svg>

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
