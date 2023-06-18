import { ErrorMessage, Field } from "formik";
import { TextError } from "./TextError";

function Input(props) {
  let { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Input;