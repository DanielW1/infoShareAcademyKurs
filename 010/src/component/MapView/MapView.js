import React, { Component } from 'react';
import classnames from "classnames";
import "./MapView.css";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";


const MapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 52.229, lng: 21.011 }}

    >
         <Marker position={props.markerPosition} />
    </GoogleMap>
))


export class MapView extends Component {
    render() {
        return <MapComponent
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBTBdvfJUhATPLp6dBl_eNmd5Dj8guOsw8&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            markerPosition={this.props.markerPosition}

></MapComponent>
        
        
    }
}

