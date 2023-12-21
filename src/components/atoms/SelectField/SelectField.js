import { useState } from 'react';
import './SelectField.scss';
import Icon from '../Icon/Icon';

function SelectField({options, name, onChangeHandler}) {
    const [open, setOpen] = useState(false);

    return (
        <div className={`select select-${name} ${open ? 'select--open' : ''}`} onClick={() => setOpen(!open)}>
            <button className='select__button'>
                Select
                <Icon name='arrow-down' height='20' width='20'/>
            </button>
            <ul>
                {options.map((option, i) => <li key={i} value={option.value} onClick={(e) => onChangeHandler(e.target.getAttribute("value"))}>{option.displayValue}</li>)}
            </ul>
        </div>
    )
}

export default SelectField;