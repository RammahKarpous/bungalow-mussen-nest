import desktopBgImage from '../assets/images/home/home-bg-image.png'

import Button from "../components/Button"

const Home = () => {
    return (
        <div>
            <div className="absolute top-0 left-0 w-full h-full -z-1 bg-cover-full" style={{ background: `url(${desktopBgImage})` }}></div>

            <div className="absolute bottom-0 left-0 w-full h-72 bg-gradient-to-b to-brown-50">
                <div className="flex flex-col justify-center items-center gap-2 w-72 absolute left-1/2 bottom-10 transform -translate-x-1/2 text-center">
                    <h1 className="text-white">Welkom</h1>
                    <p className="text-white">Bij de mussen-nest voor de ideale vakantie voor twee</p>
                    <Button to="/gallerij" type="secondary" text="Bezoek de gallerij" />
                </div>
            </div>
        </div>
    )
}

export default Home