import React from 'react';
import data from './GalleryData.json';

function Gallery() {
    return (
        <div>
            {data.pictures.map((picture, index) => (
                <div>
                    <img
                        key={index}
                        src={picture.image}
                        alt={`Gallery Image ${index + 1}`}
                        style={{ width: '600px' }}
                    />
                </div>
            ))}
        </div>
    );
}

export default Gallery;
