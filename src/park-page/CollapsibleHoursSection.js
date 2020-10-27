import React, {useState} from 'react';
import Proptypes from 'prop-types';

const CollapsibleSection = ({panelName, panelInfo}) => {
    const [panelOpenStatus, setPanelOpenStatus] = useState(false)

    let togglePanel = () => {
        setPanelOpenStatus(!panelOpenStatus);
    }

    let displayContent = () => {
        return panelOpenStatus ? "panel-visible" : "panel-hidden";
    }
    return(
        <>
            <button className="panel-btn" onClick={togglePanel}>{panelName}</button>
                <div className={`collapsible-panel ${displayContent()}`}>{panelInfo.map(item => (
                    <p>{item}</p>
                ))}</div>

        </>
    )
};


CollapsibleSection.propTypes = {
    panelInfo: Proptypes.array.isRequired,
    panelName: Proptypes.string.isRequired,
}


export default CollapsibleSection;