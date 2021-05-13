import React, { Component } from 'react';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Logic from './logic';
import {muscoli,esercizi} from '../store.js'



class App extends Component{
  state = {
    esercizi,
    esercizio:{},
    gruppoMuscolare:''
  }
  getEserciziPerGruppo(){
    return Object.entries(this.state.esercizi.reduce((esercizi,esercizio)=>{
      const {muscoli} = esercizio
      esercizi[muscoli] = esercizi[muscoli] ? [...esercizi[muscoli],esercizio] : [esercizio]
      return esercizi
    },{}))
  }
  getGruppoSelezionato = gruppoMuscolare =>{
    this.setState({
      gruppoMuscolare
    })
  }
  getEsercizioDescription = id =>{
    this.setState((prevState)=>({
      esercizio:prevState.esercizi.find(ex => ex.id === id)
    }))
  }
  render(){
    const esercizi = this.getEserciziPerGruppo();
    console.log('Gruppo Muscolare ' + this.state.gruppoMuscolare);
    return(
      <div >
      <Header title='Gym Workout' subtitle='Made in React an Material-UI'></Header>
      <Logic 
      esercizi={esercizi}
      gruppoMuscolare={this.state.gruppoMuscolare}
      onEsercizioSelected={this.getEsercizioDescription}
      esercizio = {this.state.esercizio} 
       ></Logic>
      <Footer muscoli={muscoli} gruppoMuscolare={this.state.gruppoMuscolare} onSelect={this.getGruppoSelezionato}></Footer>
      </div>
    );
  }
}

export default App;
