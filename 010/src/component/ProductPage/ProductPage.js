import React, {Component} from "react"

export default class ProductPage extends Component{
    render(){
        const{name, imageUrl, description, quantity, uuid} = this.props.product;
        return <div>
            <img src={imageUrl} alt="Nie udało się załadować obrazka"></img>
            <div>{name}</div>
            <div>{description}</div>
            <div>{quantity}</div>
            <button disabled={quantity<1} onClick={()=>{this.props.handler(this.props.product)}}>Dodaj do koszyka</button>
        </div>
    }
}