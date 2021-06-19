import TopNavigation from "../components/TopNavigation"
import PageTemplate from "../components/templates/PageTemplate"
import { activiteitenLinks } from './../components/links';

const Activiteiten = ({ children, active }) => {
    return (
        <PageTemplate extraClassNames="col-start-1 col-end-9 md:col-start-2 md:col-end-8 mb-0">
            <h1>Activiteiten</h1>
            <TopNavigation type={activiteitenLinks} active={active} />
            {children}
        </PageTemplate>
    )
}

export default Activiteiten
