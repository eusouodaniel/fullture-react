import { useState, useEffect } from "react";
import { getRandomDog } from "../../api/dog";

export default function RandomDog() {
    const [dog, setDog] = useState([]);

    useEffect(() => {
        getRandomDog(setDog)
    },[])

    return (
        <div>
            <h1>Estou em random - {dog} </h1>
        </div>
    )
}