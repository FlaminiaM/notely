import { useState } from 'react';
import './TabsContainer.scss';
import Tab from '../../atoms/Tab/Tab';


function TabsContainer({tabs}) {
    const [indexSelectedTab, setIndexSelectedTab] = useState(0);

    const handleTabClick = (i) => setIndexSelectedTab(parseInt(i));


    return (
        <div className='tabs-container'>
            {tabs.map((tab, i) => <Tab key={i} tabIndex={i} text={tab} selected={i === indexSelectedTab} handleTabClick={handleTabClick}/>)}
        </div>
    )
}

export default TabsContainer;