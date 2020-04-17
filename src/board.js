import React, {Component} from "react";
import {Map} from "immutable";
import Posting from './posting';
import './board.css';
import * as db from './datastore.js';

class Board extends Component{
    constructor(props){
        super(props);
        this.state = {pokemon: Map(), pokemonID: 0, newPokemonName: "", newPokemonType:"", newPokemonImage: ""};
    }

    newPokemonNameFunction = (event) => {
        this.setState({newPokemonName: event.target.value})
    }
    newPokemonTypeFunction = (event) => {
        this.setState({newPokemonType: event.target.value})
    }
    newPokemonImageFunction = (event) => {
        this.setState({newPokemonImage: event.target.value})
    }

    savePokemonInfo = () => {
        var pokemonData = {
            name: this.state.newPokemonName,
            type: this.state.newPokemonType,
            image: this.state.newPokemonImage,
        }
        this.setState({
            pokemon: this.state.pokemon.set(this.state.pokemonID, pokemonData),
            pokemonID: this.state.pokemonID +1,
        })
        db.addDog(this.state.newPokemonName)
    }

    deletePokemon = (id) => {
        this.setState({pokemon: this.state.pokemon.delete(id)})
    }

    savePokemon = (id, field) => {
        this.setState({pokemon: this.state.pokemon.update(id, (n) => {return Object.assign({}, n, field); })})
    }

    render(){
        const allPokemon = this.state.pokemon.entrySeq().map(([pokemonID, pokemonData]) => {
            return <Posting save = {this.savePokemon} 
                            delete = {this.deletePokemon} 
                            name={pokemonData.name} 
                            type = {pokemonData.type} 
                            image = {pokemonData.image}
                            id = {pokemonID}
                    />  
            }
        )
        return(
            <div className = "boardContainer">
                <h1> This is the pokemon board</h1>
                <p> Add a Pokemon</p>

                <p> Enter a name</p>
                <input type = "text" value = {this.setState.PokemonName} onChange={this.newPokemonNameFunction}/>

                <p>Enter a type</p>
                <input type = "text" value = {this.setState.PokemonType} onChange={this.newPokemonTypeFunction}/>

                <p> Enter Image URL</p>
                <input type = "text" value = {this.setState.PokemonImage} onChange={this.newPokemonImageFunction}/>

                <button onClick = {this.savePokemonInfo}> Save </button>

                {allPokemon}

            </div>
            
        )
    }
}

export default Board;

