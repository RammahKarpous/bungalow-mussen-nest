import { useState } from 'react';
import InfoCard from './InfoCard';
import { winkels } from './winkels';
import { MapContainer, TileLayer, Marker, } from 'react-leaflet';

const ActiviteitenMap = () => {

    // const [winkel, setWinkel] = useState(winkels[0])

    return (
        <div className="h-40 md:h-96 w-full grid grid-cols-1 md:grid-cols-4">
            <div className="col-start-1 col-end-4">
                <MapContainer center={[52.101440, 5.772200]} zoom={11} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {winkels.map(winkel => (
                        <Marker position={[winkel.location.lat, winkel.location.lng]}></Marker>
                    ))}

                </MapContainer>
            </div>

            {/* <InfoCard winkels={winkel} /> */}
        </div>
    )
}

export default ActiviteitenMap
