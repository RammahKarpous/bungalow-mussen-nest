import MainTemplate from "../../components/templates/MainTemplate"
import LocatiesMap from '../../components/activiteiten/LocatiesMap';
import { winkels } from './../../components/activiteiten/winkels';

const Winkels = () => {
    return (
        <MainTemplate>
            <LocatiesMap gebouwen={winkels} zoom={12} center={[52.10044, 5.7122]} />
        </MainTemplate>
    )
}

export default Winkels
