import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {id: 1, name: 'All', active: true},
  {id: 2, name: 'Board', active: false},
  {id: 3, name: 'Graph', active: false},
  {id: 4, name: 'Recent', active: false},
];

const drawerListSlice = createSlice({
  name: 'drawerList',
  initialState,
  reducers: {
    updateList: (state, action) => {
      const db = state.find(z => action.payload === z.id);
      const adb = state.find(z => z.active === true);
      db.active = true;
      adb.active = false;
    }
  }
});


export const {updateList} = drawerListSlice.actions;

export default drawerListSlice.reducer;