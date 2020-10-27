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
                <div className={`collapsible-panel ${displayContent()}`}>{panelInfo}</div>

        </>
    )
};

CollapsibleSection.propTypes = {
    panelName: Proptypes.string.isRequired,
    panelInfo: Proptypes.string.isRequired,
}

export default CollapsibleSection;