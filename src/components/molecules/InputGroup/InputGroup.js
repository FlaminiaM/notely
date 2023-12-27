import './InputGroup.scss';

function InputGroup({input, label}) {
  return (
    <div className='input-group'>
        {label ? <label>{label}</label>: ''}
        {input}
    </div>
  )
}

export default InputGroup;