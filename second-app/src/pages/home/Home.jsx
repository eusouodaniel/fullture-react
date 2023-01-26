import { useState, useEffect } from 'react';
import { ImageList, ImageListItem } from '@mui/material'
import { Link } from 'react-router-dom';
import { getCats } from '../../api/cat';

export default function Home() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        getCats(setCats)
    },[])
    return (
        <div>
            <h1>Estou na Home</h1>
            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                {cats.map((cat) => (
                    <Link to={`/detail/${cat.breeds[0]?.id}`}>
                        <ImageListItem>
                            <img
                                src={`${cat.url}`}
                                loading="lazy"
                            />
                        </ImageListItem>
                    </Link>
                ))}
            </ImageList>
        </div>
    )
}