import logo from './logo.svg';
import './App.css';
import {Component} from 'react';

class App extends Component{
 
  state = {
    name: 'Eduarda Salazar ',
    cont: 0
  }

  mudaNome = () => {
    this.setState({name: 'a', cont: 0})
  }
 
  incrementa = () => {
    const {cont} = this.state;
    this.setState({cont: cont + 1})
  }

  decrementa = () => {
    const {cont} = this.state;
    this.setState({cont: cont - 1})
  }
 
  render (){
    const {name, cont} = this.state;

    return (
      <div className='minhaDiv'>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.mudaNome}>
            {name} {cont}
          </p>

          <p onClick={this.incrementa}>
            Valor +
          </p>

          <p onClick={this.decrementa}>
            Valor -
          </p>
          
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        </div>
        <p>test</p>
      </div>
    );
  }
}

export default App;
