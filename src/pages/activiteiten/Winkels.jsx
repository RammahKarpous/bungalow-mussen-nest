import MainTemplate from "../../components/templates/Galerij/MainTemplate"
import LocatiesMap from '../../components/activiteiten/LocatiesMap';
import { winkels } from './../../components/activiteiten/winkels';

const Winkels = () => {
    return (
        <MainTemplate>
            <LocatiesMap gebouwen={winkels} />
        </MainTemplate>
    )
}

export default Winkels
