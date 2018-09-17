import React from 'react';
import Input from './Input';
import Button from './Button';

const Form = (props)=> ( 
    <form className="forms">
        <Input label="Uresname" placeholder="Uresname"/> 
        <Input label="Password" placeholder="Password"/>
        <div className="btn-box">
            <Button className="cancel">
                <i className="fa fa-ban"></i>
                Cancel
            </Button>
            <Button className="succes">
                <i className="fa fa-check"></i>
                Log In
            </Button>
        </div>
    </form>
)

export default Form;