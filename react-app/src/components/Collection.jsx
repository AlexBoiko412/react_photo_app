import React from 'react';
import Card from "./UI/Card/Card";

const Collection = ({photos}) => {
    return (
        <div className="collection">
            {
                photos.length
                ?
                photos.map((photo, index) =>
                    <Card
                        key={index}
                        name={photo.name}
                        images={photo.photos}
                        id={index}
                    />
                )
                    : <div></div>
            }
        </div>
    );
};

export default Collection;