import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import confirmationReducer from '../pages/Confirmation/ducks/reducer';
import officeInfoReducer from '../pages/OfficeInfo/ducks/reducer';
import personalInfoReducer from '../pages/PersonalInfo/ducks/reducer';

export const store = configureStore({
  reducer: {
    personalInfo: personalInfoReducer,
    officeInfo: officeInfoReducer,
    confirmation: confirmationReducer
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
