import { createSlice } from '@reduxjs/toolkit';
import { Node } from '../../DS/ug.js';

const initialState = [];

const contsSlice = createSlice({
  name: 'conts',
  initialState,
  reducers: {
    addConts: (state, action) => {
      state.push(JSON.parse(action.payload));
    },
    updateConts: (state, action) => {
      const id = action.payload.ti;
      const nll = JSON.parse(action.payload.nll);

      let node  = JSON.parse(JSON.stringify(new Node(id, "", nll)));

      for(let i=0; i<state.length; i++) {
        if (id.startsWith(state[i].head.id)) {
          let current = state[i].head, ll = state[i];
          if (current === null) {
            current = node;
            return 1;
          }
          while(current.next !== null) {
            current = current.next;
            if (id.startsWith(current.id) && id !== current.id) {
              ll= current.d;
              current = current.d.head;
            }
          }
          current.next = node;
          ll.length++;
        }
      }
    },
    updateContFiles: (state, action) => {
      const {id, file, content} = action.payload;

      for(let i=0; i<state.length; i++) {
        if ((id+"").startsWith(state[i].head.id+"")) {
          let current = state[i].head;
          while(current !== null) {
            if ((id+"").startsWith(current.id) && (id+"") !== (current.id+ "")) {
              current = current.next.d.head;
            }else if ( (id+"") === (current.id+ "")) {
              current.v.push({file: file, content: content});
              break;
            }else {
              current = current.next;
            }
          }
        }
      }
    }
  }
});


export const {updateConts, updateContFiles, addConts} = contsSlice.actions;

export default contsSlice.reducer;