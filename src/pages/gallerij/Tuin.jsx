import Slideshow from "../../components/Slideshow"

import terras from '../../assets/images/tuin/terras.jpg'
import tuin from '../../assets/images/tuin/tuin.jpg'
import ligbed from '../../assets/images/tuin/ligbed.jpg'
import terrasEethoek from '../../assets/images/tuin/terras-eethoek.jpg'

const Tuin = () => {

    const images = [
        { path: terras, name: 'Terras' },
        { path: tuin, name: 'Tuin' },
        { path: ligbed, name: 'Ligbed' },
        { path: terrasEethoek, name: 'Terras eethoek' },
    ]
//  w-10/12 xl:w-full m-auto lg:ml-0 
    return (
        <div className="mt-10 flex flex-col xl:flex-row gap-10">
            <div className="xl:w-7/12">
                <Slideshow images={images} />
            </div>
            <div className="xl:w-3/12">
                <img src={terras} alt={`Terras`} className="xl:w-9/12 xl:block hidden mb-10" />

                <p>De zonnige tuin op het zuiden geeft u alle privacy. Er staat een eettafel met 2 stoelen.
                Tevens 2 heerlijke ligbedden met een tafeltje en uiteraard ontbreekt de parasol niet. Dit alles is voorzien van kussens voor een comfortabele zit of lig. Badlakens voor de ligbedden zijn ook aanwezig. Geniet van de rust en fluitende vogels op uw eigen terras. En misschien brengt de eekhoorn u wel een bezoekje!</p>
            </div>
        </div>
    )
}

export default Tuin
