import './Button.scss';

function Button({text, icon, buttonType}) {
  return (
    <button className={`button button--${buttonType}`}>
      {icon ? icon: ''}
      {text}
    </button>
  );
}

export default Button;
