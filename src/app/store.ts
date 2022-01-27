import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import officeInfoReducer from '../pages/OfficeInfo/ducks/reducer';
import personalInfoReducer from '../pages/PersonalInfo/ducks/reducer';

export const store = configureStore({
  reducer: {
    personalInfo: personalInfoReducer,
    officeInfo: officeInfoReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
