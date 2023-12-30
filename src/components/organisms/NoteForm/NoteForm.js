import {useState, useEffect} from 'react';
import { connect } from "react-redux";
import { addNotes, setNoteFormState, editNotes } from '../../../redux/reducers/notesReducers';

import './NoteForm.scss';

import Icon from '../../atoms/Icon/Icon';
import InputField from '../../atoms/InputField/InputField';
import SelectField from '../../atoms/SelectField/SelectField';
import InputGroup from '../../molecules/InputGroup/InputGroup';
import TextAreaInput from '../../atoms/TextAreaInput/TextAreaInput';
import Button from '../../atoms/Button/Button';
import PopupContainer from '../../molecules/PopupContainer/PopupContainer';

function NoteForm({noteForm, notes, addNote, editNotes, setNoteFormState, open}) {
    const categoryOptions = [{value: 'home', displayValue:'Home'}, {value: 'business', displayValue:'Business'}, {value: 'personal', displayValue:'Personal'}];
    const lastUsedID = notes.length > 0 ? notes[notes.length -1].id : 0;
    let today = new Date();
    const emptyFormState = {id: lastUsedID + 1, title: '', category: '', description: '', date: today.toDateString()};
    const [note, setNote] = useState(noteForm.isEditState ? notes.filter(note => note.id === parseInt(noteForm.editNoteId))[0] : emptyFormState);

    const onInputChangeHandler = (e) => {
        if(e.target.getAttribute("name") === "category"){
            const name = "category";
            const value = e.target.getAttribute("value");
            setNote({ ...note, [name]: value });
        } else{
            const { name, value } = e.target;
            setNote({ ...note, [name]: value });
        }

    }

    const onAddNoteHandler = () => {
        addNote(note);
        setNoteFormState({isNotesFormOpen: false, isEditState: false ,editNoteId: ""});
        setNote(emptyFormState)
    }
    const onEditNoteHandler = () => {
        editNotes({
            ...note,
            date: today.toDateString()
        });
        setNoteFormState({isNotesFormOpen: false, isEditState: false ,editNoteId: ""});
        setNote(emptyFormState)
    }
    return (
        <PopupContainer open={open}>
            <div className='new-note-container'>
            <div className='backdrop'></div>
            <div className='new-note'>
                <div className='new-note__header'>
                    <h1>New note</h1>
                    <Button icon={<Icon name='close' height='24' width='24'/>} clickHandler={() => setNoteFormState({isNotesFormOpen: false, isEditState: false ,editNoteId: ""})}/>
                </div>
               <div className='new-note__input-groups new-note__input-groups--space-between'>
                    <InputGroup input={<InputField name="title" inputType='text' placeholder='Title' onChangeHandler={onInputChangeHandler} inputValue={note.title}/>} label="Title" />
                    <InputGroup input={<SelectField name="category" placeholder="Select" options={categoryOptions} onChangeHandler={onInputChangeHandler} inputValue={note.category}/>} label="Category"/>
               </div>
               <InputGroup input={<TextAreaInput cols='1' rows='10' placeholder='Add description' name='description' onChangeHandler={onInputChangeHandler} inputValue={note.description} />} label="Description (optional)"/>
               <div className='new-note__input-groups new-note__input-groups--flex-end'>
                    <Button text='Cancel' buttonType='ghost' clickHandler={() => setNoteFormState({isNotesFormOpen: false, isEditState: false ,editNoteId: ""})} />
                    {
                        noteForm.isEditState 
                        ? <Button text='Edit Note' clickHandler={onEditNoteHandler} buttonType='primary' />
                        : <Button text='Add Note' clickHandler={onAddNoteHandler} buttonType='primary' />
                    }
               </div>
            </div>
        </div>
        </PopupContainer>
    )   
}

const mapDispatchToProps = (dispatch) => {
    return {
      addNote: (obj) => dispatch(addNotes(obj)),
      editNotes: (obj) => dispatch(editNotes(obj)),
      setNoteFormState: (obj) => dispatch(setNoteFormState(obj)),
    };
  };
  const mapStateToProps = (state) => {
    return {
      notes: state.notes,
      noteForm: state.noteForm
    };
  };
export default connect(mapStateToProps,mapDispatchToProps)(NoteForm);
