import MainTemplate from "../../components/templates/MainTemplate"
import LocatiesMap from '../../components/activiteiten/LocatiesMap';
import { horeca } from './../../components/activiteiten/horeca';

const Horeca = () => {
    return (
        <MainTemplate extraClassNames="mb-0 md:mb-32">
            <LocatiesMap gebouwen={horeca} zoom={16} center={[52.10420, 5.7752]} />
        </MainTemplate>
    )
}

export default Horeca