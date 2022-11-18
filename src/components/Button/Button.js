const Button = ({
  children,
  className,
  onClick,

  index,
}) => {
  return (
    <button className={className} onClick={(event) => onClick(event, index)}>
      {children}
    </button>
  );
};

export default Button;
