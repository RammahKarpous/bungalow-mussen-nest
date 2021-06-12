import Slideshow from "../../components/Slideshow"

import badkamer1 from '../../assets/images/badkamer/badkamer1.jpg'
import badkamer2 from '../../assets/images/badkamer/badkamer2.jpg'
import badkamer3 from '../../assets/images/badkamer/badkamer3.jpg'
import radiator from '../../assets/images/badkamer/radiator.jpg'
import douchekraan from '../../assets/images/badkamer/douchekraan.jpg'
import wasbak from '../../assets/images/badkamer/wasbak.jpg'
import regendouche from '../../assets/images/badkamer/regendouche.jpg'

import MainTemplate from './../../components/templates/Galerij/MainTemplate';
import SlideshowTemplate from "../../components/templates/Galerij/SlideshowTemplate"
import ContentTemplate from './../../components/templates/Galerij/ContentTemplate';

const Badkamer = () => {

    const images = [
        { path: badkamer1, name: 'Badkamer 1' },
        { path: badkamer2, name: 'Badkamer 2' },
        { path: radiator, name: 'Radiator' },
        { path: douchekraan, name: 'Douchekraan' },
        { path: regendouche, name: 'Regendouche' },
        { path: wasbak, name: 'Wasbak' },
        { path: badkamer3, name: 'Badkamer 3' },
    ]

    return (
        <MainTemplate>
            <SlideshowTemplate>
                <Slideshow images={images} />
            </SlideshowTemplate>
            <ContentTemplate quaterWidth>
            <img src={images[0].path} alt={images[0].name} className="xl:w-9/12 xl:block hidden mb-10" />

                <p>In de badkamer een douche met regenkop, handdouche en thermostaatkraan.
                Radiator om de handdoeken te verwarmen, een wasbak en opbergruimte.
                Stopcontact en ook een föhn is aanwezig.</p>
                
                <p>Ook de badkamer is volledig voorzien van vloerverwarming.</p>
            </ContentTemplate>
        </MainTemplate>
    )
}

export default Badkamer
