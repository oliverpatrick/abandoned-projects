import { createSlice } from '@reduxjs/toolkit';

export interface ISidebarState {
  sidebarHeader: string;
  sidebarContent: string;
  sidebarFooter: string;
}

export const initialState: ISidebarState = {
  sidebarHeader: '',
  sidebarContent: '',
  sidebarFooter: '',
};

export const SidebarSlice = createSlice({
  initialState,
  name: 'sidebar',
  reducers: {},
});

export const sidebarReducer = SidebarSlice.reducer;
