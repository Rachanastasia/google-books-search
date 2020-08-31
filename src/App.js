import React, { Component } from 'react';
import Results from './Results/Results';
import Header from './Header/Header';

const apiKey = `AIzaSyAv7rNaCRp1G0QqK_oS8XlRzKLaLLW9y-E`;

// fetch, then set state.books as objects of result of fetch

class App extends Component {
  state={
    books:[],
    printType: '',
    filtering: '',
    search: '',

    // title: '',
    // author: '',
    // price: '',
    // desc: '',
    // image: '',
  }

  render(){
    return <main className='App'>
      <Header />
      <Results state={this.state}/>
    </main>
  };
}

export default App;