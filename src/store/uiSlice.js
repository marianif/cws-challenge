import { createSlice } from "@reduxjs/toolkit";
import { BADGE_DEFAULT, VALID_ADDRESSES, VIEWPORT } from "../constants";

const markersInitialState = {
  pickup: null,
  dropoff: null,
};

const badgesInitialState = {
  pickup: BADGE_DEFAULT,
  dropoff: BADGE_DEFAULT,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    showSuccess: false,
    viewport: VIEWPORT,
    validAddresses: VALID_ADDRESSES,
    markers: markersInitialState,
    badges: badgesInitialState,
  },
  reducers: {
    setBadgeState: (state, { payload }) => {
      state.badges[payload.type] = payload.value;
    },
    setMarkerState: (state, { payload }) => {
      state.markers[payload.type] = payload.coords;
    },
    setShowSuccess: (state, { payload }) => {
      state.showSuccess = payload;
    },
    resetState: (state) => {
      state.badges = badgesInitialState;
      state.markers = markersInitialState;
    },
  },
});

export const { setBadgeState, setMarkerState, setShowSuccess, resetState } =
  uiSlice.actions;
export default uiSlice.reducer;
