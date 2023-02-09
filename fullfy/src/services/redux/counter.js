import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: "Artista"
}

export const counter = createSlice({
    name: "page",
    initialState,
    reducers: {
        goToArtist: (state) => {
            state.value = "Artistas"
        },
        goToAlbum: (state) => {
            state.value = "Álbuns"
        },
        goToTrack: (state) => {
            state.value = "Músicas"
        }
    }
})

export const { goToArtist, goToAlbum, goToTrack } = counter.actions;
export default counter.reducer;