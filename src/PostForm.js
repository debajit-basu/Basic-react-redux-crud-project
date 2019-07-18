import React, { Component } from 'react';
import {connect} from 'react-redux';

class PostForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: null,
            postMessage: null
        }
    }

    /*getFormValue = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state , () => {
            console.log(this.state);
        });
    }*/

    savePost = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message =  this.getMessage.value;
        const data = {
            id: new Date(),
            title,
            message,
            editing:false
        }
        this.props.dispatch({
            type:'ADD_POST',
            data});
        this.getTitle.value = '';
        this.getMessage.value = '';

    }

    /*savePost = (e) => {
        e.preventDefault();
        console.log("--1");
        const data = {
            id: new Date(),
            title: this.state.title,
            message: this.state.postMessage
        }


        this.clearForm().then( (status) => {
            console.log("--3");
            if(status){
                console.log("----------4");
                console.log(this.state);
                this.props.dispatch({ type:'ADD_POST', data});
            }
        })

    }*/

    /*clearForm = () => {
        console.log("----2");
        try{
            return new Promise((resolve , reject) => {
                this.setState({title: null , postMessage: null} , () => {
                    resolve({status: true});
                })

            });

        }catch(e){
            console.log(e);
        }
    }*/

    render() {
        return (
            <div>
                <h1>Create Post</h1>
                <form>
                    <input required type="text" placeholder="Enter Post Title" name="title"
                           ref={(input)=>this.getTitle = input}  /><br /><br />
                    <textarea required rows="5" cols="28" placeholder="Enter Post" name="postMessage"
                              ref={(input)=>this.getMessage = input} /><br /><br />
                    <button onClick={this.savePost.bind(this)}>Post</button>
                </form>
            </div>
        );
    }
}
export default connect()(PostForm);
