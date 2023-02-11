import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: { }
}

export const artist = createSlice({
    name: "artist",
    initialState,
    reducers: {
        goToArtistDetail: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { goToArtistDetail } = artist.actions;
export default artist.reducer;