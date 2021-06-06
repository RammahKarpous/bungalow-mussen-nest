import TopNavigation from "../components/TopNavigation"
import { gallerijLinks } from '../components/links'

const Gallerij = ({ page, active }) => {
    return (
        <div className="col-start-1 lg:col-start-2 col-end-7 lg:col-end-9 relative mt-20">
            <h1>{active}</h1>
            <TopNavigation type={ gallerijLinks } active={active} />
            {page}
        </div>
    )
}

export default Gallerij
