import { useState } from 'react';
import './SelectField.scss';
import Icon from '../Icon/Icon';

function SelectField({options, name, onChangeHandler}) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('Select');

    const selectHandler = (e) =>{
        onChangeHandler(e.target.getAttribute("value"));
        setValue(e.target.innerText);
    }

    return (
        <div className={`select select-${name} ${open ? 'select--open' : ''}`} onClick={() => setOpen(!open)}>
            <button className='select__button'>
                {value}
                <Icon name='arrow-down' height='20' width='20'/>
            </button>
            <ul>
                {options.map((option, i) => <li key={i} value={option.value} onClick={selectHandler}>{option.displayValue}</li>)}
            </ul>
        </div>
    )
}

export default SelectField;