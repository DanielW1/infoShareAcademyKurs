import React, { Component } from 'react'
import "./Weather.css"
import axios from 'axios';

export default class Weather extends Component {
    constructor(props){
        super(props);
        this.state={
            list:[],
            index:0,
        }
    }

    componentDidMount() {
        const { match: { params: { place } } } = this.props;
        axios('https://api.openweathermap.org/data/2.5/forecast', {
            params: {
                q: place + ',pl',
                appid: '972db0310283f77dceac8f733ea466d4'
            }
        }).then(resp => this.setState({list:resp.data.list, index:0}))
    }

    onClickHandler = (index) =>{
        this.setState({index:index});
    }

    render() {
        const {list, index} = this.state;
        console.log(list[0]);
        return <div className="weatherPanel">
            <div className="time">
                {list.map((elem, index)=><div key={index} className="listItem" onClick={()=>this.onClickHandler(index)}>{elem.dt_txt}</div>)}
            </div>
            {list.length>0 && <div className="weather">
                <div>{'Temperatura:' + list[index].main.temp}</div>
                <div>{'Temperatura max:' + list[index].main.temp_max}</div>
                <div>{'Temperatura min:' + list[index].main.temp_min}</div>
                <div>{'Ciśnienie:' + list[index].main.pressure}</div>
                <div>{'Siła wiatru:' + list[index].wind.speed}</div>
            </div>}
        </div>
    }
}