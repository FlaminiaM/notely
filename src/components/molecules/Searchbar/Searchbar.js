import './Searchbar.scss';
import Icon from '../../atoms/Icon/Icon';

import InputField from '../../atoms/InputField/InputField';
import Button from '../../atoms/Button/Button';

function Searchbar() {
    return (
        <div className='searchbar'>
            <InputField inputType='text' placeholder='Search' icon={<Icon name="close" /> } />
            <Button text='Add' icon={<Icon name='add' />} buttonType='primary'  />
        </div>
    )
}

export default Searchbar;