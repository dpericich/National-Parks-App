import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import placeholder from './park-images/npsplaceholder.jpg';

const ParkImage = ({park, selectPark, index}) => {

    const setImage = (park) => {
        if(park.images[0] === undefined) {
            return placeholder
        } else {
            return park.images[0].url
        }
    }

    return(
        <Link to={`park/${park.parkCode}`}>
            <div className="park-title-image" style={{background : `center url(${setImage(park)} )`}}  onClick={() => selectPark(index)}>
                <div>
                    {park.fullName}
                </div>
            </div>
        </Link>
    )
};

ParkImage.propTypes = {
    park: PropTypes.object.isRequired,
    selectPark : PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
}


export default ParkImage;