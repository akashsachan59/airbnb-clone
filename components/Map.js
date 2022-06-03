import React from 'react'
import ReactMapGL, { Marker, Popup } from "react-map-gl"
import { useState } from 'react'
import  getCenter from "geolib/es/getCenter";
import "mapbox-gl/dist/mapbox-gl.css";

function Map({ searchResults }) {
    const [selectedLocation, setSelectedLocation] = useState({})

    // Transform searchResults into an { latitude: --, longitude: -- }
    const coordinates = searchResults.map(result => ({
        longitude: result.long,
        latitude: result.lat
    }))

    const center = getCenter(coordinates)
    // console.log(selectedLocation)

    const [viewport, setViewport] = useState({
        width: '100',
        height: '100',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    })

    return (
        <ReactMapGL
            mapStyle='mapbox://styles/akashsachan/cl3y69zc0007215pepg9mfmh7'
            mapboxAccessToken={process.env.mapbox_key}
            {...viewport}
            onMove={evt => setViewport(evt.viewport)}
            >
            {searchResults.map(result => (
                <div key={result.long}>
                    <Marker 
                    longitude={result.long}
                    latitude={result.lat}
                    offsetLeft={-20}
                    offsetTop={-10}
                    >
                        <p
                        role='img'
                        onClick={() => setSelectedLocation(result)}
                        className='cursor-pointer text-2xl animate-bounce'
                        aria-label='push-pin'
                        >
                        📌
                        </p>
                    </Marker>
                    {/* The popup on clicking the marker */}
                    {selectedLocation.long === result.long ? (
                        <Popup
                        onClose={() => setSelectedLocation({})}
                        closeOnClick={true}
                        latitude={result.lat}
                        longitude={result.long}
                        >
                            {result.title}
                            </Popup>
                    ):(false)}
                </div>
            ))}
        </ReactMapGL>
    )
}

export default Map