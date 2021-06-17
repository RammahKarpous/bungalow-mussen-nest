import Slideshow from "../../components/Slideshow"

import hal from '../../assets/images/hal/hal.jpg'
import toilet from '../../assets/images/hal/toilet.jpg'
import gaderobe from '../../assets/images/hal/gaderobe.jpg'

import MainTemplate from './../../components/templates/MainTemplate';
import SlideshowTemplate from "../../components/templates/SlideshowTemplate"
import ContentTemplate from './../../components/templates/ContentTemplate';

const Hal = () => {

    const images = [
        { path: hal, name: 'Hal' },
        { path: toilet, name: 'Toilet' },
        { path: gaderobe, name: 'Gaderobe' },
    ]
 
    return (
        <MainTemplate>
            <SlideshowTemplate>
                <Slideshow images={images} />
            </SlideshowTemplate>
            <ContentTemplate quaterWidth>
                <img src={images[0].path} alt={images[0].name} className="xl:w-9/12 xl:block hidden mb-10" />

                <p>Bij binnenkomst, komt u in een betegelde hal, aan uw linkerzijde het toilet en aan de rechterzijde een garderobe kast, hier vind u voldoende kledinghangers en een paraplu voor het geval u die nodig heeft. Ook de swiffer staat hier en een kleine verbandtrommel. Boven deze kast liggen de handdoeken voor op de buiten bedden.</p>
            </ContentTemplate>
        </MainTemplate>
    )
}

export default Hal
