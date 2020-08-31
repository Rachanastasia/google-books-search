import React, { Component } from 'react';
import Results from './Results/Results';
import Header from './Header/Header';
import SearchField from './SearchField/SearchField';


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

  componentDidMount(){
  const apiKey = `AIzaSyAv7rNaCRp1G0QqK_oS8XlRzKLaLLW9y-E`;
  const ROOT_URL = 'https://www.googleapis.com/books/v1/volumes?q=knitting';

  const options = {
    method: 'GET',
    mode: "cors",
    headers: {
      "Authorization": apiKey,
      "Content-Type": "application/json",
     
    }
  }

const handleInputChange = () =>{
return 5;
}

console.log(handleInputChange)

  fetch(ROOT_URL, options)
    .then(res => res.json())
    .then(data => console.log(data));

  }

  render(){
    return <main className='App'>
      <Header />
      <SearchField search={this.state.search} inputFunc={()=>this.handleInputChange()}/>
      <Results state={this.state}/>
    </main>
  };
}

export default App;