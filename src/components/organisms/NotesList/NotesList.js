import './NotesList.scss';
import { connect } from "react-redux";

import Note from '../Note/Note';
import { setNoteFormState } from '../../../redux/reducers/notesReducers';

function NotesList({notes, setNoteFormState, deleteFormOpenStateHandler}) {
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

  return (
    <div className='notes-list'>
        {notesList.map((note) => <Note key={note.id} {...note} editNoteHandler={editNoteHandler} deleteFormOpenStateHandler={deleteFormOpenStateHandler} />)}
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NotesList);