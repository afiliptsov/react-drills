import React,{Component} from 'react';

export default class Login extends Component{
    constructor(){
        super()
        this.state={
            login: '',
            pass: ''

        }
        this.handleLogin = this.handleLogin.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.onButtonSubmitHandler = this.onButtonSubmitHandler.bind(this);
    }
    handleLogin(e){
        this.setState({
            login: e.target.value,
        })
    }
    handlePassword(e) {
        this.setState({
            pass: e.target.value
        })
    }

    onButtonSubmitHandler(){
        alert('Your username is:'+this.state.login+' Your password is'+this.state.pass)
    }

    render(){
        return(
            <div>
                <input onChange={this.handleLogin}/>
                <input onChange={this.handlePassword}/>
                <button onClick={this.onButtonSubmitHandler}>Login</button>
            </div>
        )
    }


}