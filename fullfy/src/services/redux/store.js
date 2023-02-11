import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './page/counter';
import artistReducer from './artist/artist';
import albumReducer from './album/album';
import trackReducer from './track/track';

export const store = configureStore({
    reducer: {
        page: pageReducer,
        artist: artistReducer,
        album: albumReducer,
        track: trackReducer
    }
})