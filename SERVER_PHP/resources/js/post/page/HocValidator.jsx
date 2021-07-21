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

export default {
    MyValidationForm,
    MyValidationInput,
    MyValidationButton
}