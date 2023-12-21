import './InputField.scss';
import searchIcon from '../../../assets/icons/search.svg';

function InputField({inputType, placeholder, icon}) {
  return (
    <input className={icon ? `input input--with-icon` : `input`} style={icon ? {backgroundImage: `url(${searchIcon})`} : ''} type={inputType} placeholder={placeholder} />
  )
}

export default InputField;