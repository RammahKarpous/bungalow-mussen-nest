import ToeristenPlaats from "../../components/activiteiten/ToeristenPlaats"
import { plaatsen } from "../../components/activiteiten/toeristischInfo"
import MainTemplate from "../../components/templates/Galerij/MainTemplate"

const Toeristisch = () => {
    return (
        <MainTemplate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {plaatsen.map(plaats => (
                    <ToeristenPlaats 
                        key={plaats.id}
                        image={plaats.thumbnail} 
                        title={plaats.title} 
                        excerpt={plaats.excerpt} 
                        link={plaats.link} />
                ))}
            </div>
        </MainTemplate>
    )
}

export default Toeristisch
