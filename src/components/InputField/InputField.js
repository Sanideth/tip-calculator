import classes from "./InputField.module.css";
const InputField = ({ className, type, placeholder }) => {
  return <input type={type} className={className} placeholder={placeholder} />;
};

export default InputField;
