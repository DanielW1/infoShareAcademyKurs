import React, { Component } from 'react'
import { firestore } from './../../firebaseConfig/firebase'
import "./Recipe.css"

export default class Recipe extends Component {

    state = {
        data: {},
        comment: '',
    }

    componentDidMount = () => {
        const { id } = this.props.match.params;

        firestore().collection('recipes').doc(id).onSnapshot((querySnapshot)=>{
            this.setState({ data: querySnapshot.data() })
        })
    }

    onChangeDescription = ({ target }) => {
        this.setState({ comment: target.value })
    }
    onClickHandler = () => {
        const { id } = this.props.match.params;
        const { comment, data } = this.state;
        if (comment) {
            const newComment = { value: comment, date: Date.now() }
            firestore().collection('recipes').doc(id).update({
                comments: [newComment, ...data.comments.slice(0, data.comments.length)]

            }).then(()=>alert("Dodano komentarz"));
            this.setState({comment:''});
        }
    }

    render() {
        const { id } = this.props.match.params;
        const { data, comment } = this.state;
        const {isUser} = this.props;
        return <div>
            <div>
                <div>{data.name}</div>
                <img src={data.photoURL} />
                <div>{data.description}</div>
            </div>
            <div>
                <h3>Komentarze</h3>
                {isUser && <div>
                    <h4>Dodaj komentarz</h4>
                    <textarea onChange={this.onChangeDescription} rows="5" cols="100" value={comment}></textarea>
                    <div className="CommandsAddButton" onClick={() => this.onClickHandler()}>Dodaj</div>
                </div>}
                {data.comments && data.comments.map((elem) => {
                    const dateElem = new Date(elem.date).toDateString();
                    return(<div>
                    <div>{dateElem}</div>
                    <div>{elem.value}</div>
                </div>)})}
            </div>
        </div>
    }
}