import './TextAreaInput.scss';

function TextAreaInput({cols, rows, placeholder}) {
  return (
    <textarea className='textarea' cols={cols} rows={rows} placeholder={placeholder}></textarea>
  )
}

export default TextAreaInput;