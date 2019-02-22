import React, {Component} from 'react'
import { auth, provider } from './../../firebaseConfig/firebase';
import {Link} from 'react-router-dom'
import './Home.css'


export default class Home extends Component{

    state = {
        isUser: false,
        user: {}

    }
    componentDidMount = () => {
        auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ isUser: true, user })
                console.log(user);
            } else {
                this.setState({ isUser: false })
            }
        })
    }

    onClickHandler = () => {
        auth().signInWithPopup(provider);
    }

    onClickSignOutHandler = () => {
        auth().signOut();
    }

    render() {
        const { isUser, user } = this.state;
        return (
            <div className="App">
                {!isUser && <div className="AppPanel">
                   <Link className="AppButton" to="/recipes">Przepisy</Link>
                    <div className="AppButton" onClick={this.onClickHandler}>Sign In</div>
                </div>}
                {isUser && <div className="AppPanel">
                    <div className="AppPanel">
                        <img className="AppImage" src={user.photoURL} alt="Obrazek"></img>
                        <div>Cześć {user.displayName.split(' ')[0]} </div>
                    </div>
                    <Link className="AppButton" to="/recipes">Przepisy</Link>
                    <div onClick={this.onClickSignOutHandler} className="AppButton" >Sign Out</div>
                </div>}
            </div>
        );
    }
}