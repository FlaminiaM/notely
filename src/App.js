import './App.scss';
import Button from './components/atoms/Button/Button';
import Icon from './components/atoms/Icon/Icon';
import InputField from './components/atoms/InputField/InputField';
import NotesCategory from './components/atoms/NotesCategory/NotesCategory';
import SelectField from './components/atoms/SelectField/SelectField';
import Tab from './components/atoms/Tab/Tab';
import Searchbar from './components/molecules/Searchbar/Searchbar';
import TabsContainer from './components/molecules/TabsContainer/TabsContainer';
import NoteForm from './components/organisms/NoteForm/NoteForm';
import NotesList from './components/organisms/NotesList/NotesList';
import DeleteNoteForm from './components/organisms/DeleteNoteForm/DeleteNoteForm';

import {deleteNote} from './redux/reducers/notesReducers';

import { connect } from "react-redux";
import { useState } from 'react';

function App(props) {
  //create state for form
  const [isDeleteNoteFormOpen, setIsDeleteNoteFormOpen] = useState({isFormVisible: false, noteIdToDelete: ''});
  const deleteFormOpenStateHandler = (e) => {
    console.log("in deleteFormOpenStateHandler")
    const noteId = e.target.closest('.note') ? e.target.closest('.note').getAttribute("note-id") : "";
    setIsDeleteNoteFormOpen({isFormVisible: !isDeleteNoteFormOpen.isFormVisible, noteIdToDelete: noteId});
  }
  return (
    <div className="App">
      {/* <Button text='Add to basket' buttonType='primary' />
       <Button text='Add to basket' buttonType='primary'  icon={<Icon name="add" /> } /> 
       <Button buttonType='icon'  icon={<Icon name="delete" /> } /> 
       <Button buttonType='icon'  icon={<Icon name="edit" /> } /> 
       <Button buttonType='icon'  icon={<Icon name="close" /> } /> 
       <InputField type='text' placeholder='Form field' />
       <SelectField options={[{value: 'volvo', displayValue:'Volvo'}, {value: 'fiat', displayValue:'Fiat'}, {value: 'nissan', displayValue:'Nissan'}]} onChangeHandler={(e) => console.log(e)}/>
       <NotesCategory category="personal" />
       <NotesCategory category="home" />
       <NotesCategory category="business" />
       <TabsContainer tabs={['home', 'business', 'personal']} /> */}
       <Searchbar />
       <div className='container'>
        <NotesList deleteFormOpenStateHandler={deleteFormOpenStateHandler} />
       </div>
       {
        props.isNotesFormOpen && <NoteForm open={props.isNotesFormOpen} />
       }
       {
        isDeleteNoteFormOpen.isFormVisible && <DeleteNoteForm isDeleteNoteFormOpen={isDeleteNoteFormOpen} deleteNote={props.deleteNote} deleteFormOpenStateHandler={deleteFormOpenStateHandler}/>
       }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isNotesFormOpen: state.noteForm.isNotesFormOpen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteNote: (obj) => dispatch(deleteNote(obj))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);