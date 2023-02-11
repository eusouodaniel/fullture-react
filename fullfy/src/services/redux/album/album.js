import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: { }
}

export const album = createSlice({
    name: "album",
    initialState,
    reducers: {
        goToAlbumDetail: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { goToAlbumDetail } = album.actions;
export default album.reducer;