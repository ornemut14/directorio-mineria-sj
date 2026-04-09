import "./backbutton.css";

const BackButton = ({ children, onClick }) => {
  return (
    <button className="backbutton" onClick={onClick}>
      {children}
    </button>
  );
};

export default BackButton;
