const Button = ({ text, onClick, disabled }: any) => {
  return <button disabled={disabled} onClick={onClick}>{text}</button>;
};

export default Button;
