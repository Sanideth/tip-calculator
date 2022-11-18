const InputField = ({ className, type, placeholder, onChange, value }) => {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default InputField;
