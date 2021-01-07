import React from 'react';
import './Gallery.scss';
import ImageGallery from 'react-image-gallery';
import * as bigPhotos from '../../assets/img/gallery';
import * as thumbnails from '../../assets/img/gallery/thumbnails';


const Gallery = () => {
    const photosListGenerator = () => {
        const images = [];
        Object.keys(bigPhotos.images).map(img => {
            images.push({
                original: bigPhotos.images[img].default,
                thumbnail: thumbnails.images[img].default,
            });
        });
        return images;
    };

    return(
        <ImageGallery items={photosListGenerator()} />
    );
}

export default Gallery;