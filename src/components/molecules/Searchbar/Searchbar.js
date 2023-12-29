import './Searchbar.scss';
import Icon from '../../atoms/Icon/Icon';

import { connect } from "react-redux";
import { setNoteFormState } from '../../../redux/reducers/notesReducers';

import InputField from '../../atoms/InputField/InputField';
import Button from '../../atoms/Button/Button';

function Searchbar({setNoteFormState}) {
    return (
        <div className='searchbar'>
            <InputField inputType='text' placeholder='Search' icon={<Icon name="close" /> } />
            <Button text='Add' icon={<Icon name='add' />} buttonType='primary'  clickHandler={() => setNoteFormState({isNotesFormOpen: true, isEditState: false ,editNoteId: ""})} />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setNoteFormState: (obj) => dispatch(setNoteFormState(obj)),
    };
};

export default connect(null,mapDispatchToProps)(Searchbar);