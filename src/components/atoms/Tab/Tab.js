import './Tab.scss';


function Tab({text, selected, tabIndex, handleTabClick}) {
    return (
        <span tab-index={tabIndex} className={`tab ${selected ? 'tab--selected' : ''}`} onClick={(e) => handleTabClick(e.target.getAttribute("tab-index"))}>{text.toUpperCase()}</span>
    )
}

export default Tab;