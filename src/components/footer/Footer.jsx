import logo from '../../assets/logos/mussen-nest-logo-light.svg'
import { gallerijLinks, links } from '../links'
import FooterNavigation from './FooterNavigation'

const Footer = () => {
    return (
        <footer className="bg-brown-100 col-start-1 col-end-9">
            <div className="py-20 px-8 md:pr-24 md:pl-24 lg:pr-48 lg:pl-56 flex flex-col md:flex-row gap-20 justify-between">
                <div className="flex flex-col gap-6 w-full sm:w-80">
                    <img src={logo} className="w-52" alt="Mussen-Nest logo" />

                    <p className="text-beige-300">De woonkamer heeft heerlijk uitzicht op de tuin en geeft u volledig privacy. Het interieur is met een warme houten pvc vloer, witte muren en natuurlijk gordijnen een oase van rust.</p>
                </div>

                <div className="flex flex-wrap flex-col sm:flex-row gap-20 justify-between">
                    <FooterNavigation title="Pagina's" links={links} />
                    <FooterNavigation title="Gallerij" links={gallerijLinks} />

                    <div>
                        <h3 className="text-beige-300 mb-3">E-mail adres</h3>
                        <a href="mailto:info@mussen-nest.nl" className="text-beige-300">info@mussen-nest.nl</a>
                    </div>
                </div>
            </div>
            
            <p className="sm:text-center text-beige-300 p-3 px-8 bg-brown-50 mb-0">
                Gemaakt door <a href="https://viographs.com/nl" target="_blank" rel="noreferrer">
                    VioGraphs Media.
                </a>
            </p>
        </footer>
    )
}

export default Footer
