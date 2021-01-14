import React from 'react';
import './Gallery.scss';
import ImageGallery from 'react-image-gallery';
import * as bigPhotos from '../../assets/img/gallery';
import * as thumbnails from '../../assets/img/gallery/thumbnails';


const Gallery = () => {
    const photosListGenerator = () => {
        const images = [];
        Object.keys(bigPhotos.images).map(img => {
            return images.push({
                original: bigPhotos.images[img].default,
                thumbnail: thumbnails.images[img].default,
            });
        });
        return images;
    };

    return(
        <div className="gallery">
                    <ImageGallery   items={photosListGenerator()} 
                        thumbnailPosition="bottom" 
                        showPlayButton={false}
                        showBullets={true} />
                    <div className="gallery__footerMobile">
                        <div className="gallery__footerMobile-circle"></div>
                        <div className="gallery__footerMobile-circle1"></div>
                    </div>
        </div>
    );
}

export default Gallery;