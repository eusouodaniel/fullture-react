import { useState, useEffect } from 'react';
import { ImageList, ImageListItem } from '@mui/material'
import { getDogs } from '../../api/dog';

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
      },
      {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
      },
      {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
      },
      {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
      },
      {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
      },
];

export default function Home() {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        getDogs(setDogs)
    },[])
    return (
        <div>
            <h1>Estou na Home</h1>
            {/* <img src={dogs.message} alt="" /> */}
            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                {dogs.map((dog) => (
                    <ImageListItem>
                    <img
                        src={`${dog}`}
                        loading="lazy"
                    />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    )
}