import React from 'react';
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
        <Link to="/park">
            <div className="park-title-image" style={{background : `center url(${setImage(park)} )`}}  onClick={() => selectPark(index)}>
                <div>
                    {park.fullName}
                </div>
            </div>
        </Link>
    )
};


export default ParkImage;