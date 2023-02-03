import React from 'react';
import cl from './Card.module.css'

const Card = ({images, name}) => {

    return (
        <div
            className={cl.card}
        >
            <div className={cl.cardMainPhoto}>
                <img src={images[0]} alt=""/>
            </div>
            <p align="center" >{name}</p>
            <div className={cl.cardSmallPhotos}>
                <div className={cl.cardSmallPhotoItem}>
                    <img src={images[1]} alt=""/>

                </div>
                <div className={cl.cardSmallPhotoItem}>
                    <img src={images[2]} alt=""/>

                </div>
                <div className={cl.cardSmallPhotoItem}>
                    <img src={images[3]} alt=""/>

                </div>
            </div>

        </div>
    );
};

export default Card;