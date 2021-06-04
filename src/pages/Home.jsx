// import mobileBgImage from '../assets/images/home/home-mobile-bg-image.png'

const Home = () => {
    return (
        <div>
            {/* <picture>
                <source srcSet="media(" />
            </picture> */}

            {/* <div className="z-0 w-full h-full" style={`background: url(${mobileBgImage})`}></div> */}

            <div className="flex flex-col justify-center w-9/12 absolute left-1/2 bottom-10 transform -translate-x-1/2 text-center">
                <h1>Welkom</h1>
                <p>Bij de mussen-nest voor de ideale vakantie voor twee</p>
            </div>
        </div>
    )
}

export default Home
