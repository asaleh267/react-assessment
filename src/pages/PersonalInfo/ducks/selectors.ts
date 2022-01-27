import { createSelector } from "reselect";
import { RootState } from "../../../app/store";
import { PersonalInfo } from "../types";
import { PersonalInfoState } from "./reducer";

export const PersonalInfoSelector = (state: RootState): PersonalInfoState => {
  return state.personalInfo
};

export const selectIsLoading = createSelector(
  PersonalInfoSelector,
  (state): boolean => state.isLoading
);

export const selectPersonalInfo = createSelector(
  PersonalInfoSelector,
  (state): PersonalInfo => state.personalInfo
);
