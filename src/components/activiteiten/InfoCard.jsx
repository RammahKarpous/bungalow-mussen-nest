import clock from '../../assets/icons/klok.svg'

const InfoCard = ({ gebouwInfo }) => {
    return (
        <div className="bg-green-100 p-10 flex flex-col gap-2 w-72">
            <h3 className="text-beige-300">{gebouwInfo.name}</h3>
            <p className="text-beige-300 mb-1">{gebouwInfo.address}</p>

            <a href={gebouwInfo.link} target="_black" className="text-beige-300 mb-1">{gebouwInfo.website}</a>

            <div className="flex gap-2 items-center mb-2">
                <img src={clock} alt="Openingstijden" />
                <h4 className="text-beige-300">Openingstijden:</h4>
            </div>

            <div className="mb-2">
                {gebouwInfo.openingTimes.map((times, i) => (
                    <div key={i} className="flex flex-row justify-between">
                        <p className="my-0 mb-1 text-beige-300">{times.day}</p>
                        <p className="my-0 mb-1 text-beige-300">{times.times}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default InfoCard
