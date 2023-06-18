import Input from "./Input";

function FormikControl({ control, ...rest }) {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Input {...rest} />;
    case "select":
    default:
      return null;
  }
}

export default FormikControl;
