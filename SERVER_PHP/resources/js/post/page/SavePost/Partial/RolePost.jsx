import React, { Component, useState, useEffect, useRef } from "react"


// import Form from 'react-validation/build/form';
// import Input from 'react-validation/build/input';
// import Button from 'react-validation/build/button';

// import {
//     MyValidationForm,
//     MyValidationInput,
//     MyValidationButton
// } from "../../HocValidator"

import { form, control, button } from 'react-validation';

// Define own Form component
const Form = ({ getValues, validate, validateAll, showError, hideError, children, ...props }) => ( // destruct non-valid props
  <form {...props}>{children}</form>
);

// Define own Input component
const Input = ({ error, isChanged, isUsed, ...props }) => (
  <div>
    <input {...props} />
    {isChanged && isUsed && error}
  </div>
);

// Define own Button component
const Button = ({ hasErrors, ...props }) => {
  return (
    <button {...props} disabled={hasErrors} />
  );
};

// Now call HOCs on components
const MyValidationForm = form(Form);
const MyValidationInput = control(Input);
const MyValidationButton = button(Button);


import { isEmail } from 'validator';

const required = (value, props) => {
  if (!value || (props.isCheckable && !props.checked)) {
    return <span className="form-error is-visible">Required</span>;
  }
};

const email = (value) => {
  if (!isEmail(value)) {
    return <span className="form-error is-visible">${value} is not a valid email.</span>;
  }
};

const isEqual = (value, props, components) => {
  const bothUsed = components.password[0].isUsed && components.confirm[0].isUsed;
  const bothChanged = components.password[0].isChanged && components.confirm[0].isChanged;

  if (bothChanged && bothUsed && components.password[0].value !== components.confirm[0].value) {
    return <span className="form-error is-visible">Passwords are not equal.</span>;
  }
};



const RolePost = props => {

    let refForm = useRef()
    let userInput = useRef()

    function handleSubmit(event) {
        event.preventDefault(); 

        // Emulate async API call 
        setTimeout(() => {
            refForm.showError(userInput, <span>API error</span>);
        }, 1000);
    };

    function removeApiError() {

        refForm.hideError( userInput );
    };

    return (
        <div className="post__role">
            <MyValidationForm ref={ refForm } onSubmit={ handleSubmit } >
            <h3>Login</h3>
            <div>
                <label>
                    Email*
                    <MyValidationInput 
                    onFocus={ removeApiError }
                    ref={ userInput }
                    name='email' validations={[required]}/> 
                </label>
            </div>
            <div>
                <label>
                    Password*
                    <MyValidationInput type='password' name='password' validations={[required]}/>
                </label>
            </div>
            <div>
                <MyValidationButton className="button">Submit</MyValidationButton>
            </div>
        </MyValidationForm>;
        </div>
    )
}
export default RolePost

// export default class RolePost extends Component {
//     handleSubmit = (event) => {
//         event.preventDefault();

//         // Emulate async API call
//         setTimeout(() => {
//             this.form.showError(this.userInput, <span>API error</span>);
//         }, 1000);
//     };

//     removeApiError = () => {
//         console.log(this.form)
//         this.form.hideError(this.userInput);
//     };

//     render() {
//         return <Form ref={c => { this.form = c }} onSubmit={this.handleSubmit.bind(this)}>
//             <div className="row">
//                 <div className="small-12 columns">
//                     <h3>Leave a comment</h3>
//                 </div>
//             </div>
//             <div className="row">
//                 <div className="small-12 medium-4 columns">
//                     <label>
//                         <Input
//                           onFocus={this.removeApiError}
//                           ref={c => { this.userInput = c }}
//                           placeholder="username"
//                           type="text"
//                           value="Username"
//                           name="username"
//                           validations={[required]}
//                         />
//                     </label>
//                 </div>
//             </div>
//             <div className="row">
//                 <div className="small-12 medium-6 columns">
//                     <Button className="button">Submit</Button>
//                 </div>
//             </div>
//         </Form>
//     }
// }


