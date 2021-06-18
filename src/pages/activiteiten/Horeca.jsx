import MainTemplate from "../../components/templates/MainTemplate"
import LocatiesMap from '../../components/activiteiten/LocatiesMap';
import { horeca } from './../../components/activiteiten/horeca';

const Horeca = () => {
    return (
        <MainTemplate>
            <LocatiesMap gebouwen={horeca} />
        </MainTemplate>
    )
}

export default Horeca