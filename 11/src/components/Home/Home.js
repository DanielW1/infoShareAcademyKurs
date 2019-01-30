import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import "./Home.css"

export default class Home extends Component{

    render(){
        return <div>
            <div>
                <h1>Pogodynka</h1>
            </div>
            <div className="panelList">
                <div className="green panel"><Link className="link" to="/weather/Paryż">Paryż</Link></div>
                <div className="blue panel"><Link className="link" to="/weather/Londyn">Londyn</Link></div>
                <div className="red panel"><Link className="link" to="/weather/Warszawa">Warszawa</Link></div>
                <div className="orange panel"><Link className="link" to="/weather/Madryt">Madryt</Link></div>
                <div className="violet panel"><Link className="link"to="/weather/Berlin">Berlin</Link></div>
            </div>
        </div>
    }
}