import { useState } from 'react';
import InfoCard from './InfoCard';
import { MapContainer, TileLayer, Marker, ZoomControl } from 'react-leaflet';
import { Icon } from 'leaflet';

import home from '../../assets/icons/map-home.svg'
import mapMark from '../../assets/icons/map-marker.svg'

const LocatiesMap = ({ gebouwen, zoom, center }) => {

    const [gebouw, setGebouw] = useState(gebouwen[0])

    const house = new Icon({
        iconUrl: home,
        iconSize: [20, 17]
    })

    const mapMarker = new Icon({
        iconUrl: mapMark,
        iconSize: [19, 30]
    })

    return (
        <div className="w-full grid grid-cols-1 xl:grid-cols-5 gap-0 md:gap-6 items-start relative z-0">
            <div className="col-start-1 xl:col-end-4 h-md-map xl:h-lg-map">
                <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} zoomControl={false}>
                    
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    <Marker position={[52.108119, 5.774360]} icon={house} />

                    {gebouwen.map(gebouw => (
                        <Marker 
                            key={gebouw.id} 
                            position={[gebouw.location.lat, gebouw.location.lng]}
                            icon={mapMarker}
                            eventHandlers={{ 
                                click: () => {
                                    setGebouw(gebouw);
                                }
                            }}
                        />
                    ))}

                    <ZoomControl position="bottomright" />
                </MapContainer>
            </div>

            <div className="col-start-1 xl:col-start-4 xl:col-end-6">
                <InfoCard gebouwInfo={gebouw} />
            </div>
        </div>
    )
}

export default LocatiesMap
