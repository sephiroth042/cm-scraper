import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import WebForm from './WebForm';
import chatMeter from './images/chatmeter-logo.png'

class App extends Component {
  
  render(){
    return (
      <div className="App">
        <header className="App-header sm bg-secondary mb-4">  
        <img src={chatMeter} alt="ChatMeter Logo"></img>
        </header>
        <WebForm/> 
      </div>
    );
}
}

export default App;