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

                return { recipes: [...state.recipes,{id:doc.id, data:doc.data()}] }
            }))
        })
    }

    onChangeInputValueHandler = (event)=>{
        const {value} = event.target;
        this.setState({inputValue:value});
    }

    onClickRecipeHandler = (id)=>{
        console.log('handler')
        return this.props.history.push('/recipe/'+id);

    }

    render() {

        const { recipes, inputValue } = this.state;
        const {isUser} = this.props;

        return <div className="RecipesContainer">
        <div>
                <div><h2>Wyszukaj</h2></div>
            <div>Nazwa</div>
            <input onChange={this.onChangeInputValueHandler} value={inputValue}></input>
        </div>
            {isUser&& <div className="RecipeAddPanel"><Link className="RecipeAddButton" to="/addrecipe">Dodaj +</Link></div>}
            <div className="RecipeList">
                { recipes.filter(({data}, i) => { 
                    if(inputValue && inputValue.length>2){
                       return data.name.toUpperCase().includes(inputValue.toUpperCase());
                    }
                    else{
                        return i < 10
                    }
                    
                    }).map(({data, id})=>
                    <div key={id} onClick={()=>this.onClickRecipeHandler(id)} className="ResipeListItem">
                        <div>{data.name}</div>
                            <img src={data.photoURL} onClick={this.onClickRecipeHandler} />
                    </div>)}
            </div>
        </div>
    }
}