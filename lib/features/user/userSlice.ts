import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUser {
  username: string;
  userId: number | string;
  email: string;
  city?: string;
  street?: string;
}

const initialState: IUser = {
  username: 'Yasuto Kato',
  userId: '1',
  email: 'kek@mail.ru',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Omit<IUser, 'city' | 'street'>>) => {
      return { ...state, ...action.payload };
    },
    setUserCity: (state, action: PayloadAction<{ city: string; street: string }>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUser, setUserCity } = userSlice.actions;

export default userSlice.reducer;
