import React, { Component } from "react";
import classnames from "classnames";
import "./Contact.css";
import {MapView} from "./../MapView/MapView";

const company={
    address:"Puławska 2, 02-566 Warszawa",
    phone:"500 600 700",
    email:"biuro@infoshare.com"
}

export default class Contact extends Component {
    constructor(){
        super();
        this.state={
            position:{lat:"", lng:""}
        }
    }
    componentDidMount(){
        fetch('https://maps.googleapis.com/maps/api/geocode/json?address='+company.address.replace(" ","+")+'&key=AIzaSyBTBdvfJUhATPLp6dBl_eNmd5Dj8guOsw8')
            .then((resp)=>resp.json()).then((response)=>{
                console.log(response);
                this.setState({position:response.results[0].geometry.location})
            })
    }
    render() {
        return (
            <>
                <div className={classnames('Center', 'Container')}>
                    <h1>InfoShare Academy</h1>
                    <div className={classnames('ContactDataContainer')}>
                        <div className={classnames('ContactDataContainerInside')}>
                            <div>Adres</div>
                            <div>Telefon</div>
                            <div>E-mail</div>
                        </div>
                        <div className={classnames('ContactDataContainerInside')}>
                            <div>{company.address}</div>
                            <div>{company.email}</div>
                            <div>{company.phone}</div>
                        </div>
                    </div>
                    <MapView markerPosition={this.state.position}></MapView>
                </div>

            </>
        );
    }
}