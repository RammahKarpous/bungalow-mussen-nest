import Slideshow from "../../components/Slideshow"

import keuken from '../../assets/images/keuken/keuken.jpg'
import keukenblok from '../../assets/images/keuken/keukenblok.jpg'
import keukenhal from '../../assets/images/keuken/keukenhal.jpg'
import keukeneethoek from '../../assets/images/keuken/keukeneethoek.jpg'

import MainTemplate from './../../components/templates/MainTemplate';
import SlideshowTemplate from "../../components/templates/SlideshowTemplate"
import ContentTemplate from './../../components/templates/ContentTemplate';

import liebherrPDF from '../../assets/downloads/liebherr-ik1624-21.pdf'
import vaatwasserPDF from '../../assets/downloads/vaatwasser.pdf'
import combiPDF from '../../assets/downloads/combi.pdf'
import Button from './../../components/Button';

const Keuken = () => {

    const images = [
        { path: keuken, name: 'Keuken' },
        { path: keukenblok, name: 'Keuken blok' },
        { path: keukenhal, name: 'Keuken hal' }, 
        { path: keukeneethoek, name: 'Keuken eethoek' },
    ]

    return (
        <MainTemplate>
            <SlideshowTemplate>
                <Slideshow images={images} />
            </SlideshowTemplate>
            <ContentTemplate>
                <h3>Keuken</h3>

                <p>De keuken is modern en voorzien van een 4-pits gasstel, koelkast (met vriesvak), combimagnetron,afwasmachine, Nespresso koffiemachine, waterkoker, theepot, elektrische citruspers en mixer. Verschillende soorten kook-en braadpannen staan tot uw beschikking. Er is ruim voldoende serviesgoed, glaswerk en bestek aanwezig. Er is een swiffer en een kruimeldief. Klein strijkplankje en strijkbout aanwezig.</p>
                    
                <h4 className="mt-10">Gebruiksaanwijzingen</h4>
                <p className="mb-4">Hieronder vind u een aantal downloadbare gebruiksaanwijzingen</p>

                <div className="flex gap-3 flex-col items-start">
                    <Button to={vaatwasserPDF} download text="Inventum Vaatwasser" type="primary" />
                    <Button to={combiPDF} download text="Inventum Combi magnetron" type="primary" />
                    <Button to={liebherrPDF} download text="Liebherr ik1624-21 koelkast" type="primary" />
                </div>
            </ContentTemplate>
        </MainTemplate>
    )
}

export default Keuken
