import React, { Component } from 'react'
import { firestore } from './../../firebaseConfig/firebase'
import {Link, Redirect} from 'react-router-dom'
import "./Recipes.css"

export default class Recipes extends Component {
    state = {
        recipes: [],
        inputValue:'',
    }
    componentDidMount = () => {
        firestore().collection('recipes').get().then((querySnapshot) => {
            querySnapshot.forEach(doc => this.setState(state => {

                return { recipes: [...state.recipes, doc.data()] }
            }))
        })
    }

    onChangeInputValueHandler = (event)=>{
        const {value} = event.target;
        this.setState({inputValue:value});
    }

    onClickRecipeHandler = ()=>{
        console.log('handler')
        return this.props.history.push('/recipe');

    }

    render() {

        const { recipes, inputValue } = this.state;

        return <div>
        <div>
                <div><h2>Wyszukaj</h2></div>
            <div>Nazwa</div>
            <input onChange={this.onChangeInputValueHandler} value={inputValue}></input>
        </div>
            <div className="RecipeAddPanel"><Link className="RecipeAddButton" to="/addrecipe">Dodaj +</Link></div>
            <div className="RecipeList">
                {recipes.filter((elem, i) => { 
                    if(inputValue){
                       return elem.name.toUpperCase().includes(inputValue.toUpperCase());
                    }
                    else{
                        return i < 10
                    }
                    
                    }).map(elem =>
                    <div onClick={this.onClickRecipeHandler} className="ResipeListItem">
                        <div>{elem.name}</div>
                            <img src={elem.photoURL} onClick={this.onClickRecipeHandler} />
                    </div>)}
            </div>
        </div>
    }
}