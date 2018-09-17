import React from 'react';
import Input from './Input';
import Button from './Button';

const Form = (props)=> ( 
    <form className="forms">
        <Input label="Email Address" placeholder="Email Address"/> 
        <Input label="Username" placeholder="Username"/>
        <Input label="Password" placeholder="Password"/>
        <Input label="First Name" placeholder="First Name"/>
        <Input label="Last Name" placeholder="Last Name"/>
        <div className="btn-box">
            <Button className="cancel">
                <i className="fa fa-ban"></i>
                Cancel
            </Button>
            <Button className="succes">
                <i className="fa fa-check"></i>
                Sing Up
            </Button>
        </div>
    </form>
)

export default Form;