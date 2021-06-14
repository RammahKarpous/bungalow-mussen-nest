const ToeristenPlaats = ({ image, title, excerpt, link }) => {
    return (
        <div 
            className="flex flex-col justify-start items-start">

            <div 
                className="h-32 sm:h-72 md:h-32 lg:h-44 xl:h-64 w-full bg-cover"
                style={{ background: `url(${image})` }}></div>

            <h3 className="mt-4">{title}</h3>
            <p>{excerpt}</p>

            <a href={link} target="_blank" className="button primary inline-block mt-1" rel="noreferrer">Meer info</a>
        </div>
    )
}

export default ToeristenPlaats
