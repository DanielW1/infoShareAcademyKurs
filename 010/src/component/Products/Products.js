import React, { Component } from "react";
import {Link} from "react-router-dom";
import products from "./../../products";
import ProductPage from "./../ProductPage";
import classnames from "classnames";
import "./Products.css"

class ProductListElem extends Component {

    render() {
        const { name, promotion, quantity, uuid } = this.props.product;
        return <>
            <div className={classnames('ProductListElem')}> {/*<img src={this.props.product.imageUrl} height="100px" width="100px"></img>*/}
                <Link key={uuid} to={`/Products/${uuid}`}>{name}</Link>
                {promotion && <div>Promocja !!!</div>}
                {quantity>0 && <div>Dostepny</div>}
                {(quantity===0) && <div>Niedostepny</div>}
                </div>
        </>
    }
}

export default class Products extends Component {
    myproducts = products;
    constructor() {
        super();
        this.state = {
            filtredProducts: products,
            category: [],
            promotion:false,
            available:false,
        }
    }
    componentDidMount() {
        let { category } = this.state;
        let tmpcategory = ["",];
        products.forEach(elem => {
            const index = tmpcategory.indexOf(elem.category);
            if (index < 0) {
                tmpcategory.push(elem.category)
            }
        })

        this.setState({ category: tmpcategory })
    }

    filterById = ({ uuid }) => {
        const { match: { params: { productId } } } = this.props;
        return uuid === productId || productId === undefined;
    }

    sortAscList = () => {
        this.setState((state) => {
            filtredProducts: state.filtredProducts.sort((A, B) => {
                if (A.name > B.name)
                    return 1;
                if (A.name < B.name)
                    return -1;
                return 0;
            })
            return state.filtredProducts
        })
    }

    sortDscList = () => {
        this.setState((state) => {
            filtredProducts: state.filtredProducts.sort((A, B) => {
                if (A.name < B.name)
                    return 1;
                if (A.name > B.name)
                    return -1;
                return 0;
            })
            return state.filtredProducts
        })
    }

    handler = (product) =>{
        this.setState((state) =>{
            let res = state.filtredProducts.find(elem => elem.uuid === product.uuid);
            res.quantity--;
            return state.filtredProducts;
        })
        
    }

    checkAvailability = (event) => {
        if (event.target.checked)
            this.setState({available:true}, this.cascadeFilter)
        else
            this.setState({ available: false },  this.cascadeFilter);
    }
    checkPromotion = (event) => {
        if (event.target.checked)
            this.setState({ promotion: true },  this.cascadeFilter);
        else
            this.setState({ promotion: false },   this.cascadeFilter);
    }

    selectedCategory = (event)=> {
        let result = event.target.options[event.target.selectedIndex].value;
        this.setState({selectedCategory:result},this.cascadeFilter)
    }

    filterByName = (event) => {
        const result = event.target.value;
        this.setState({ filteredName: result }, this.cascadeFilter)
    }

    cascadeFilter = () =>{
        const {promotion, available, selectedCategory, filteredName} = this.state;
        let myFilteredProduts
        if(promotion)
        {
           myFilteredProduts = products.filter((elem) => elem.promotion === true)
      }else{
            myFilteredProduts= products;
        }
        if(available){
            myFilteredProduts = myFilteredProduts.filter((elem) => elem.quantity > 0)
        }
        if(selectedCategory){
           myFilteredProduts = myFilteredProduts.filter((elem) => elem.category === selectedCategory);
        }
        if(filteredName){
            myFilteredProduts = myFilteredProduts.filter((elem) => elem.name.includes(filteredName));

        }

        this.setState({filtredProducts:myFilteredProduts});
    }



    render() {
        const { match: { params: { productId } } } = this.props;
        const { filtredProducts, category } = this.state
        return <>
        {!productId && <>
            <div>
                <input type="text" onBlur={this.filterByName}></input>
                <select name="" id="" onChange={this.selectedCategory}>
                    {category.map((elem) => <option key={elem} vlaue={elem}>{elem}</option>)}
                </select>
                <button onClick={this.sortAscList}>Sortuj Asc</button>
                <button onClick={this.sortDscList}>Sortuj Dsc</button>
                <input type="checkbox" name="available" value="isAvailable" onChange={this.checkAvailability} />Dostępny
                <input type="checkbox" name="promotion" value="inPromotion" onChange={this.checkPromotion} />W promocji
                <div>Liczba produktów: {filtredProducts.length}</div>
            </div>
            <div className="ListContainer">
                { filtredProducts.map((elem) => <ProductListElem key={elem.uuid} product={elem}></ProductListElem>)}
            </div>
            </>}
            {productId && filtredProducts.filter(this.filterById).map((elem) =><ProductPage 
            key={elem.uuid} product={elem} handler={this.handler}></ProductPage>)}
            {productId && <Link to="/Products"> Powróć do listy produktów</Link>}
        </>
    }
}

