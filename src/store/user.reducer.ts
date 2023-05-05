import { createReducer, on } from '@ngrx/store';
import { userActions } from './user.action';

export interface User {
  name: string;
  uid: string ;
  email: string;
  password: string;
  videoTime: number;
}

const initialUser: User = {
  name: '',
  email: '',
  uid: '',
  password: '',
  videoTime: 0,
};

export const userReducer = createReducer(
  initialUser,
  on(userActions.updateUser, (state, payload) => {
    const { type: _, ...userData } = payload;
    return { ...state, ...userData };
  }),
  on(userActions.removeUser, (state, payload) => initialUser)
);
