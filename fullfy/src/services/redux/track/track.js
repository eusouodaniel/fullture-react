import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: { }
}

export const track = createSlice({
    name: "track",
    initialState,
    reducers: {
        goToTrackDetail: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { goToTrackDetail } = track.actions;
export default track.reducer;