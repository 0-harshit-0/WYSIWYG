import { configureStore } from '@reduxjs/toolkit';

import drawerListReducer from '../components/top/topSlice';
import contsReducer from '../components/mid/midSlice';

export default configureStore({
  reducer: {
    drawerList: drawerListReducer,
    conts: contsReducer
  }
});