import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './searchpage.css';
import states from './states'
import ParkImage from './ParkImage';

const SearchPage = ({parkData, currentStateCode, updateSelectedStateCode, selectPark}) => {

    const [stateCode, setStateCode] = useState(currentStateCode)

    const displaySelectedState = (e) => {
        setStateCode(e.target.value);
    }

    useEffect(() => {
        updateSelectedStateCode(stateCode);
    }, [stateCode])

    return (
        <div>
            <div className="search-bar-container">
                <Link to={`/${currentStateCode}`}>
                    <select className="state-dropdown" onChange={displaySelectedState}>
                        {Object.entries(states).map(([key, value]) => {
                            return (
                                <option value={key} key={key}>
                                    {value}
                                </option>
                            )
                        })}
                    </select>
                </Link>
            </div>
            {parkData ? parkData.map((park, index) => <ParkImage park={park} key={index} index={index} selectPark={selectPark} />) : null}
        </div>
    )
};

SearchPage.propTypes = {
    parkData : PropTypes.array.isRequired,
    currentStateCode: PropTypes.string.isRequired,
    updateSelectedStateCode: PropTypes.func.isRequired,
    selectPark: PropTypes.func.isRequired,

}

export default SearchPage;