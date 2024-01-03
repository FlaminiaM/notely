import './App.scss';
import Searchbar from './components/molecules/Searchbar/Searchbar';
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