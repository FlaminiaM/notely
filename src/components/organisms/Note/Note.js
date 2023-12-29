import NotesCategory from '../../atoms/NotesCategory/NotesCategory';
import Button from '../../atoms/Button/Button';
import Icon from '../../atoms/Icon/Icon';
import './Note.scss';

function Note({id, title, description, category, date, editNoteHandler, deleteNoteHandler}) {
  const createUserFriendlyDate = (date) => {
    let fullDate = new Date(date);

    let day = fullDate.getDate();
    let month = fullDate.getMonth() + 1;
    let year = fullDate.getFullYear();

    return `${day}/${month}/${year}`;
}
  return (
    <div className='note' note-id={id}>
        <div className='note__header'>
            <NotesCategory category={category} />
            <div className='note__header-actions'>
                <Button buttonType='icon'  icon={<Icon name="checkbox" /> } /> 
                <Button buttonType='icon'  icon={<Icon name="edit" /> } clickHandler={editNoteHandler}/> 
                <Button buttonType='icon'  icon={<Icon name="delete" /> } clickHandler={deleteNoteHandler} /> 
            </div>
        </div>
        <div className='note__body'>
            <h1 className='note__body-title'>{title}</h1>
            <p className='note__body-description'>{description}</p>
            <p className='note__body-date'>{createUserFriendlyDate(date)}</p>
        </div>
    </div>
  )
}

export default Note;