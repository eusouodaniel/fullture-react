import axios from 'axios';

export const getDogs = (setDogs) => {
    axios.get("https://dog.ceo/api/breed/hound/images")
            .then((response) => {
                console.log(response.data);
                setDogs(response.data.message);
            }).catch((error) => {
                console.error(error);
            })
}

export const getRandomDog = (setDog) => {
    axios.get("https://dog.ceo/api/breeds/image/random")
            .then((response) => {
                console.log(response.data);
                setDog(JSON.stringify(response.data));
            }).catch((error) => {
                console.error(error);
            })
}