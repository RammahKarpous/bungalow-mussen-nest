import TopNavigation from "../components/TopNavigation"
import { gallerijLinks } from '../components/links'
import PageTemplate from "../components/templates/PageTemplate"

const Gallerij = ({ children, active }) => {
    return (
        <PageTemplate>
            <h1>Gallerij</h1>
            <TopNavigation type={gallerijLinks} active={active} />
            {children}
        </PageTemplate>
    )
}

export default Gallerij
