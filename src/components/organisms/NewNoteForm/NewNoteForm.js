import {useState} from 'react';

import './NewNoteForm.scss';

import Icon from '../../atoms/Icon/Icon';
import InputField from '../../atoms/InputField/InputField';
import SelectField from '../../atoms/SelectField/SelectField';
import InputGroup from '../../molecules/InputGroup/InputGroup';
import TextAreaInput from '../../atoms/TextAreaInput/TextAreaInput';
import Button from '../../atoms/Button/Button';

function NewNoteForm({open}) {
    const categoryOptions = [{value: 'home', displayValue:'Home'}, {value: 'business', displayValue:'Business'}, {value: 'personal', displayValue:'Personal'}];
    //create form state and set on change handlers for each input element    
    return (
        <div className={`${open ? 'new-note-container new-note-container--open' : 'new-note-container'}`}>
            <div className='backdrop'></div>
            <div className='new-note'>
                <div className='new-note__header'>
                    <h1>New note</h1>
                    <Icon name='close' height='24' width='24'/>
                </div>
               <div className='new-note__input-groups new-note__input-groups--space-between'>
                    <InputGroup input={<InputField inputType='text' placeholder='Title'/>} label="Title"/>
                    <InputGroup input={<SelectField options={categoryOptions} name='category' onChangeHandler={(e) => console.log(e)}/>} label="Category"/>
               </div>
               <InputGroup input={<TextAreaInput cols='1' rows='10' placeholder='Add description' />} label="Description (optional)"/>
               <div className='new-note__input-groups new-note__input-groups--flex-end'>
                    <Button text='Cancel' buttonType='ghost' />
                    <Button text='Add Note' buttonType='primary' />
               </div>
            </div>
        </div>
    )   
}

export default NewNoteForm;