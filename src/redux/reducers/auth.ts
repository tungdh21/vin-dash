import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EAdminRole } from '../../constants/enum';
export interface Authentication {
  isAuthenticated: boolean;
  isLoading: boolean;
  adminRole: EAdminRole;
}
const initialState: Authentication = {
  isAuthenticated: false,
  isLoading: false,
  adminRole: EAdminRole.Admin,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setAuthen(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    },
    setRole(state, action: PayloadAction<EAdminRole>) {
      state.adminRole = action.payload;
    },
  },
});
export const { setLoading, setAuthen, setRole } = slice.actions;
export default slice.reducer;
