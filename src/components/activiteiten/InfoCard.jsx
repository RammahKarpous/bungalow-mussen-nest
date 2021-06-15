const InfoCard = ({ winkel }) => {
    return (
        <div className="bg-green-100 text-beige-300 p-5 flex flex-col gap-2 w-72">
            <h3>{winkel.name}</h3>

        </div>
    )
}

export default InfoCard
