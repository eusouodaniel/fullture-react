import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Carousel from 'react-material-ui-carousel'
import { Link } from 'react-router-dom';
import { Paper } from '@mui/material'
import { getCatByBreed } from "../../api/cat";

export default function Detail() {
    const [catsByBreed, setCatsByBreed] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getCatByBreed(setCatsByBreed, id)
    },[])

    return (
        <div>
            <Carousel>
                {
                    catsByBreed.map((catByBreed) => 
                        <Paper>
                            <img src={catByBreed.url} width="500" height="500" alt="" />
                        </Paper>
                     )
                }
            </Carousel>
            <Link to="/">
                <button>Voltar para home</button>
            </Link>
            {/* <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                {catsByBreed.map((catByBreed) => (
                    <ImageListItem>
                    <img
                        src={`${catByBreed.url}`}
                        loading="lazy"
                    />
                    </ImageListItem>
                ))}
            </ImageList> */}
        </div>
    )
}