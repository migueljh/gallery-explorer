import { createSlice } from '@reduxjs/toolkit';

import { GallerySection, GallerySort, GalleryWindow } from '@types';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    section: GallerySection.Hot,
    sort: GallerySort.Viral,
    window: GalleryWindow.Day,
    showViral: true,
    page: 0,
  },
  reducers: {
    setSection: (state, action) => {
      state.section = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setWindow: (state, action) => {
      state.window = action.payload;
    },
    setShowViral: (state, action) => {
      state.showViral = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setSection, setSort, setWindow, setShowViral, setPage } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
