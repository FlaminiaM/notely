import './NotesList.scss';
import { connect } from "react-redux";

import Note from '../Note/Note';
import { setNoteFormState, completeNote } from '../../../redux/reducers/notesReducers';

function NotesList({notes, setNoteFormState, deleteFormOpenStateHandler, completeNote}) {
  const notesList = [...notes];
  const sortFunction = (p1, p2) => {
    const p1Date = new Date(p1.date);
    const p2Date = new Date(p2.date);
    return (p1Date < p2Date) ? 1 : ((p1Date > p2Date) ? -1 : 0);
    
  }
  notesList.sort(
    (p1, p2) => sortFunction(p1, p2));
  
  const editNoteHandler = (e) => {
    const noteId = e.target.closest('.note').getAttribute("note-id");
    setNoteFormState({
      isNotesFormOpen: true,
      isEditState: true,
      editNoteId: noteId
    })
  }

  const completeNoteHandler = (e) => {
    console.log("in complete note handler")
    const noteId = e.target.closest('.note').getAttribute("note-id");
    console.log('note id is', noteId)
    completeNote(noteId);
  }

  return (
    <div className='notes-list'>
        {notesList.map((note) => <Note key={note.id} {...note} editNoteHandler={editNoteHandler} deleteFormOpenStateHandler={deleteFormOpenStateHandler} completeNoteHandler={completeNoteHandler}/>)}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setNoteFormState: (obj) => dispatch(setNoteFormState(obj)),
    completeNote: (noteId) => dispatch(completeNote(noteId))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NotesList);