import { useState, useEffect } from 'react';
import { getImageByArtist } from '../../../services/api/image';
import defaultImage from '../../../assets/images/artist-default.jpg';

export default function Image({artist}) {
    const [image, setImage] = useState([]);

    useEffect(() => {
        getImageByArtist(setImage, artist);
    },[artist])

    return (
        <img 
            src={image || defaultImage } 
            alt={image ? artist : "Artista sem imagem"}
        />
    )
}