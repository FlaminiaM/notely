import './InputField.scss';


function InputField({inputType, placeholder}) {
  return (
    <input className='input' type={inputType} placeholder={placeholder}/>
  )
}

export default InputField;