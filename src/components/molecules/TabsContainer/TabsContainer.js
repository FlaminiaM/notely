import { useState } from 'react';
import {filterBy} from '../../../redux/reducers/notesReducers';

import { connect } from "react-redux";

import './TabsContainer.scss';
import Tab from '../../atoms/Tab/Tab';


function TabsContainer({categories, filterBy}) {
    const tabs = [{value: '', displayValue:'All'}, ...categories]
    const [indexSelectedTab, setIndexSelectedTab] = useState(0);

    const handleTabClick = (e) => {
        const i = e.target.getAttribute("tab-index");
        const value = e.target.getAttribute('tab-value');
        setIndexSelectedTab(parseInt(i));
        filterBy(value);
    }

    return (
        <div className='tabs-container'>
            {tabs.map((tab, i) => <Tab key={i} tabIndex={i} {...tab} selected={i === indexSelectedTab} handleTabClick={handleTabClick}/>)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      categories: state.categories,
    };
  };

const mapDispatchToProps = (dispatch) => {
    return {
        filterBy: (category) => dispatch(filterBy(category))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TabsContainer);
