import React, {useState, useEffect} from 'react';
import './searchpage.css';
import states from './states'
import ParkImage from './ParkImage';

const SearchPage = ({parkData, currentStateCode, updateSelectedStateCode, selectPark}) => {

    const [stateCode, setStateCode] = useState("AL")

    const displaySelectedState = (e) => {
        setStateCode(e.target.value);
    }

    useEffect(() => {
        updateSelectedStateCode(stateCode);
    }, [stateCode])

    return (
        <div>
            <div className="search-bar-container">
                <select className="state-dropdown" onChange={displaySelectedState}>
                    {Object.entries(states).map(([key, value]) => {
                        return <option value={key} key={key}>{value}</option>
                    })}
                </select>
            </div>
            {parkData ? parkData.map((park, index) => <ParkImage park={park} key={index} index={index} selectPark={selectPark} />) : null}
        </div>
    )
};

export default SearchPage;