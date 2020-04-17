import React, {Component} from "react";

class Posting extends Component{

    constructor(props){
        super(props);
        this.state = {editing: false, newTitle: ""};
    }

    deletePosting = () =>{
        this.props.delete(this.props.id)
    }

    editTitle = () => {
        this.setState({editing:true})
    }

    changeNewTitle = (event) => {
        this.setState({newTitle: event.target.value})
    }

    submit = () => {
        var newName = {
            name: this.state.newTitle
        }
        this.props.save(this.props.id, newName);

        this.setState({editing: false})
    }

    render(){
        var editBoxOrEditButton = null;
        if(this.state.editing){
            editBoxOrEditButton = (
                <div>
                    <input value = {this.state.newTitle} onChange = {this.state.changeNewTitle}/>
                    <button> Submit</button>
                </div>
            )
        }
        else{
            editBoxOrEditButton = <button onClick = {this.editTitle}> Edit Title</button>
        }
        return(
            <div>
                <p>Pokemon Name: {this.props.name}</p>
                <p>Pokemon Type: {this.props.type}</p>
                <img src ={this.props.image}/>
                <button onClick = {this.deletePosting}>Delete</button>
                {/* <button onClick = {this.editTitle}>Edit Title</button> */}
                {editBoxOrEditButton}
            </div>
        )
    }
}

export default Posting; 