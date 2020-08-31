import React, { Component } from 'react';
import Results from './Results/Results';
import Header from './Header/Header';
import SearchField from './SearchField/SearchField';


// fetch, then set state.books as objects of result of fetch

class App extends Component {
  state = {
    books: [],
    printType: '',
    filtering: '',
    search: '',
    loading: false,
    submit: false,

    // title: '',
    // author: '',
    // price: '',
    // desc: '',
    // image: '',
  }





  handleInputChange = (event) => {
    this.setState({ search: event.target.value });

  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ submit: true });
  }





  render() {
    return <main className='App'>
      <Header />
      <SearchField search={this.state.search} submit={this.handleSubmit} inputFunc={this.handleInputChange} />
      <Results state={this.state} />
    </main>
  };

  componentDidUpdate() {
    const apiKey = `AIzaSyAv7rNaCRp1G0QqK_oS8XlRzKLaLLW9y-E`;
    const ROOT_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

    const options = {
      method: 'GET',
      mode: "cors",
      headers: {
        "Authorization": apiKey,
        "Content-Type": "application/json",
      }
    }

    if (this.state.submit === true) {
      fetch(`${ROOT_URL}${this.state.search}`, options)
        .then(res => res.json())
        .then(data => this.setState({books: data.items, submit: false}));
        console.log(this.state.books);
    }
  }
}

export default App;