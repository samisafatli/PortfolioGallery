import "react-image-gallery/styles/css/image-gallery.css";
import './Gallery.css'
import ImageGallery from "react-image-gallery";

import data from './GalleryData.json';

function Gallery() {
    return (
        <div>
            <ImageGallery
                showBullets={true}
                showPlayButton={false}
                thumbnailPosition={'bottom'}
                items={data.pictures} />
        </div>
    );
}

export default Gallery;
