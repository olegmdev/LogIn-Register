import React, { Component, Fragment } from 'react';
import './App.css';

import '../node_modules/font-awesome/css/font-awesome.min.css'; 

import Header from './components/Header';
import Social from './components/Social';
import FormLogin from './components/FormLogin';
import FormRegister from './components/FormRegister';
import Footer from './components/Footer';

class LoginRegister extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isToggle: true
    }
  }

  clickLogin = ()=> {
    this.setState({
      isToggle: true
    })
  }

  clickRegister = ()=> {
    this.setState({
      isToggle: false
    })
  }

  render() {
    const isToggle = this.state.isToggle;

    return (
      <Fragment>
        
        <Header />
        
        <div className="LoginRegister"> 
        <div className="form-box">
          <Fragment>
            <div className={`titleLogin ${isToggle ? '' : 'active-bgr'}`} onClick={this.clickLogin}>
              Log In 
              <i className={`${isToggle ? 'fa fa-angle-down' : 'fa fa-angle-up'}`}></i>
            </div>

            { isToggle ? 
              <Fragment>
                <Social />
                <p className="or">or</p>
                <FormLogin />
              </Fragment>
              : 
              null }
          </Fragment>

          <Fragment>
            <div className={`titleRegister ${isToggle ? 'active-bgr' : ''}`} onClick={this.clickRegister}>
              Register
              <i className={`${isToggle ? 'fa fa-angle-up' : 'fa fa-angle-down'}`}></i>
            </div>

            { isToggle ? 
              null 
              : 
              <Fragment>
                <Social />
                <p className="or">or</p>
                <FormRegister />
              </Fragment>
            }
          </Fragment>
        </div>
        </div>
        <Footer />
        </Fragment>
      
    );
  }
}

export default LoginRegister;
