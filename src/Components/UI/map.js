import React from 'react'
import { GoogleMap , withScriptjs, withGoogleMap , Marker} from 'react-google-maps'
const Maps = withScriptjs(withGoogleMap ((props) => {

    //where it will render first

    const initialLocation = {
        lat: props.location.lat,
        lng:props.location.lng
    }
    return (
        <GoogleMap
            defaultZoom={14}
            defaultCenter={initialLocation}
        >
            <Marker/>
        </GoogleMap>
    )
}))

export default Maps;