import React, {Component} from 'react';
import './App.css';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import axios from 'axios';
import Websites from './Websites';


export default class WebForm extends Component{
  
    constructor(props){
        super(props)

        this.state = {
            currentUrl: "",
            key: 0,
            urlHistory: [],
            titleHistory: [], 
            websites: []
        }
    }

    changeHandler = e =>{
        this.setState({
            currentUrl: e.target.value
        })
      }
    
      submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/test', {url: this.state.currentUrl})
        .then(response =>{
          console.log(response);
          const urlHistory = this.state.urlHistory;
          const titleHistory = this.state.titleHistory;
          urlHistory.unshift(this.state.currentUrl)
          titleHistory.unshift(response.data)
          console.log(this.state)
          document.getElementById("react-form").reset();
          this.forceUpdate();
        })
        .catch(error => {
          console.log(error)
        })
      }


render(){
  
    return(
      <Container>
        <Row>
          <Col>
              <Form onSubmit={this.submitHandler} id="react-form">
                  <Form.Label className="formLabel">
                  Input URL Here.
                  </Form.Label>
                  <Form.Control className="mb-3" type="url" placeholder="Please begin URL with http:// or https://" onChange={this.changeHandler}/>
                  <Button className="mb-3" onClick={this.submitHandler}>
                  Generate Title
                  </Button>
              </Form>
              <h2>
                Previously Entered URLs:
              </h2>
              <Websites titles={this.state.titleHistory} urls={this.state.urlHistory}/>
            </Col>
          </Row>
        </Container>

    )
  }
    
}


    
