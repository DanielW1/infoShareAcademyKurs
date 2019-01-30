import React, { Component } from 'react'
import "./Weather.css"
import axios from 'axios';

export default class Weather extends Component {
    constructor(props){
        super(props);
        this.state={
            list:[],
        }
    }

    componentDidMount() {
        const { match: { params: { place } } } = this.props;
        axios('https://api.openweathermap.org/data/2.5/forecast', {
            params: {
                q: place + ',pl',
                appid: '972db0310283f77dceac8f733ea466d4'
            }
        }).then(resp => this.setState({list:resp.data.list}))
    }
    render() {
        const {list} = this.state;
        return <div className="weatherPanel">
            <div className="time">
                {list.map((elem)=><div className="listItem">{elem.dt_txt}</div>)}
            </div>
            <div className="weather">
                
            </div>
        </div>
    }
}