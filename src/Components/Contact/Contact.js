import React, { Component } from 'react'
import NavButton from '../NavButton/NavButton'
import './Contact.css'
import axios from 'axios'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'

export default class Contact extends Component {
    constructor(props){
        super(props)

        this.state = {
            name:'',
            email:'',
            message:''
        }

    }

    handleNameChange = (event) => {this.setState({name: event.target.value})
    }

    handleEmailChange = (event) => {this.setState({ email: event.target.value})
    }

    handleMessageChange = (event) => {this.setState({ message: event.target.value})
    }

    formSubmit=(e)=>{
        e.preventDefault();
       
       
        
        let data = {
          name:this.state.name,
          email:this.state.email,
          message:this.state.message
        }
      
      
      
        
        axios.post('/api/form',data)
        .then(res=>{
          this.setState({
            sent:true,
          },this.resetForm())
        })
        .catch(()=>{
          console.log('message not send');
          
        })
        
       
       }
    
    resetForm=()=>{
        this.setState({
            name:'',
            message:'',
            email:''
        })

        setTimeout(()=>{
            this.setState({
            sent:false,
            
            

            })
        },3000)
    }

    render() {
        return (
            <div className="main">
            
                <div className="top1">
                    <h1>Call Tyrone...</h1>
                    <p>Or at least email me! Got a question about something or just want to reach out to me? Fill out the form below with your
                        question and I will get back to you as soon as I can!
                    </p>
                
                </div>
                <div id="login">
                    <Form onSubmit={this.formSubmit } className="form">
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input 
                             type='text'
                             value={this.state.name}
                             name="name"
                             onChange={this.handleNameChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input 
                             type='email'
                             value={this.state.email}
                             name="email"
                             onChange={this.handleEmailChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="name">Message</Label>
                            <Input 
                             style={{height: '300px'}}
                             type='textarea'
                             name={this.state.message}
                             onChange={this.handleMessageChange}
                            />
                        </FormGroup>

                        <Button>Submit</Button>
                    </Form>
                </div>
                <footer>
                    <i className="fab fa-github"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-facebook"></i>
                    <i className="far fa-envelope"></i>
                </footer>    
                <NavButton className="navi" onButtonClick={this.onButtonClick} />
            </div>
        )
    }
}