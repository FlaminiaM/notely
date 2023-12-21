import './App.scss';
import Button from './components/atoms/Button/Button';
import Icon from './components/atoms/Icon/Icon';
import InputField from './components/atoms/InputField/InputField';
import NotesCategory from './components/atoms/NotesCategory/NotesCategory';
import SelectField from './components/atoms/SelectField/SelectField';
import Tab from './components/atoms/Tab/Tab';
import TabsContainer from './components/molecules/TabsContainer/TabsContainer';

function App() {
  return (
    <div className="App">
      <Button text='Add to basket' buttonType='primary' />
       <Button text='Add to basket' buttonType='primary'  icon={<Icon name="add" /> } /> 
       <Button buttonType='icon'  icon={<Icon name="delete" /> } /> 
       <Button buttonType='icon'  icon={<Icon name="edit" /> } /> 
       <Button buttonType='icon'  icon={<Icon name="close" /> } /> 
       <InputField type='text' placeholder='Form field' />
       <SelectField options={[{value: 'volvo', displayValue:'Volvo'}, {value: 'fiat', displayValue:'Fiat'}, {value: 'nissan', displayValue:'Nissan'}]} onChangeHandler={(e) => console.log(e)}/>
       <NotesCategory category="personal" />
       <NotesCategory category="home" />
       <NotesCategory category="business" />
       <TabsContainer tabs={['home', 'business', 'personal']} />

    </div>
  );
}

export default App;
