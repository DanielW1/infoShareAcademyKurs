import React, {Component} from 'react';
import {firestore} from "./../../firebaseConfig/firebase"
import "./AddRecipe.css"

export default class AddRecipe extends Component{

    state={
        inputName:'',
        inputDescription:'',
        inputURL:'',
    }

    onChangeName = ({target})=>{
        this.setState({inputName:target.value})
    }
    onChangeDescription = ({ target } ) => {
        this.setState({ inputDescription: target.value })
    }
    onChangeURL = ( { target } ) => {
        this.setState({ inputURL: target.value })
    }

    onSubmit=()=>{
        const { inputDescription, inputName, inputURL } = this.state;
        firestore().collection('recipes').doc().set({
            name:inputName,
            description:inputDescription,
            photoURL:inputURL,
        }).then(()=>alert('Zarejestrowano przepis')).catch((error)=>alert(error.message));
        this.setState({inputName:'',inputDescription:'',inputURL:''})
    }

    render(){
        const {inputDescription,inputName,inputURL} = this.state;
        return <div className="AddRecipeForm">
            <div>Nazwa</div>
            <input onChange={this.onChangeName} value={inputName}></input>
            <div>Opis</div>
            <textarea onChange={this.onChangeDescription} rows="5" cols="100" value={inputDescription}></textarea>
            <div>Adres URL</div>
            <input onChange={this.onChangeURL} value={inputURL}></input>
            <div onClick={this.onSubmit} className="RecipeAddButton">Dodaj</div>
        </div>
    }
}