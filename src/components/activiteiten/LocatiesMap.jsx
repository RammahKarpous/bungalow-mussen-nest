import { useState } from 'react';
import InfoCard from './InfoCard';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Icon } from 'leaflet';

import home from '../../assets/icons/map-home.svg'
import mapMark from '../../assets/icons/map-marker.svg'

const LocatiesMap = ({ gebouwen }) => {

    const [gebouw, setGebouw] = useState(gebouwen[0])
    const [activeMarker, setActiveMarker] = useState(null)

    const house = new Icon({
        iconUrl: home,
        iconSize: [20, 17]
    })

    const mapMarker = new Icon({
        iconUrl: mapMark,
        iconSize: [19, 30]
    })

    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-0 md:gap-6 items-start">
            <div className="col-start-1 col-end-4 h-md-map md:h-lg-map">
                <MapContainer center={[52.101440, 5.772200]} zoom={11} scrollWheelZoom={true}>
                    
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    <Marker position={[52.108119, 5.774360]} icon={house} />

                    {gebouwen.map(gebouw => (
                        <Marker 
                            key={gebouw.id} 
                            position={[gebouw.location.lat, gebouw.location.lng]}
                            className={`${activeMarker && 'bg-current text-red-500'} hover:bg-gray-400`}
                            icon={mapMarker}
                            eventHandlers={{ 
                                click: () => {
                                    setGebouw(gebouw);
                                }
                            }}

                        />
                    ))}
                </MapContainer>
            </div>

            <div className="col-start-1 md:col-start-4 col-end-6">
                <InfoCard gebouwInfo={gebouw} />
            </div>
        </div>
    )
}

export default LocatiesMap
