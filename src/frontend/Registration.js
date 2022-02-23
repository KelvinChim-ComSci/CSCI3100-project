import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Registration.css';

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameError : "",
            passwordError : "",
            emailError : "",
            confirmPasswordError : ""
        }
    }
    async sendMail(event) {
        event.preventDefault();
        let usermail = document.getElementsByName("email")[0].value;
        let mailsubject = "Verification mail from CU Simulator";
        let mailcontent = "3100 be with U";
/*
        await fetch(process.env.REACT_APP_BASE_URL + "/email", {
            method: "POST",
            headers: new Headers({
                "Content-Type": 'application/json',
                "Accept": 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
                "Access-Control-Allow-Credentials": true,
            }),
            body: JSON.stringify({
                to: usermail,
                subject: mailsubject,
                text: mailcontent
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
            });        */
    }

    render() {
        return (
            <div id="registration">
                
                <div className="container">
                  
                    <h1>CU Simulator</h1>
            
                    <form autoComplete="on">
            
                      <div className="txt_field">

                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" required></input>
                        <div className="error">{this.state.usernameError}</div>

                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" required></input>
                        <div className="error">{this.state.emailError}</div>

                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" required></input>
                        <div className="error">{this.state.passwordError}</div>

                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" name="confirmPassword" required></input>
                        <div className="error">{this.state.confirmPasswordError}</div>
                      </div>

                      <div className="buttons" onClick={this.sendMail}>
                        <input id="submit_box" type="submit" value="Send email"></input>
                      </div>
                      <div className="links">
                        <p><a href="./">Return to log in</a></p>
                      </div>
            
                    </form>
                    
                </div>
            </div>
        )
    }
}

export default Registration;



