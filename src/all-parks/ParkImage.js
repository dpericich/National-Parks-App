import React from 'react';
import {Link} from 'react-router-dom';
import placeholder from './park-images/npsplaceholder.jpg';

const ParkImage = ({park, selectPark, index, match, location}) => {

    const setImage = (park) => {
        if(park.images[0] === undefined) {
            return placeholder
        } else {
            return park.images[0].url
        }
    }

    return(
        <Link to="/park/:park-id">
            <div className="park-title-image" style={{background : `center url(${setImage(park)} )`}}  onClick={() => selectPark(index)}>
                <div>
                    {park.fullName}
                    {console.log(match, location)}
                </div>
            </div>
        </Link>
    )
};


export default ParkImage;