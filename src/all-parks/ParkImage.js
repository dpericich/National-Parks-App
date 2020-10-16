import React from 'react';
import placeholder from './park-images/npsplaceholder.jpg';

const ParkImage = ({park}) => {
    return(
        <div className="park-title-image" style={{background : `center url(${park.images[0].url || placeholder} )`}}>
            <div>
                {park.fullName}
            </div>
        </div>
    )
};

export default ParkImage;