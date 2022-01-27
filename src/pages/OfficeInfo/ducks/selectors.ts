import { createSelector } from "reselect";
import { RootState } from "../../../app/store";
import { OfficeInfo } from "../types";
import { OfficeInfoState } from "./reducer";

export const OfficeInfoStateSelector = (state: RootState): OfficeInfoState => {
    return state.officeInfo
  };

export const selectIsLoading = createSelector(
  OfficeInfoStateSelector,
  (state): boolean => state.isLoading
);

export const selectOfficeInfo = createSelector(
  OfficeInfoStateSelector,
(state): OfficeInfo => state.officeInfo
);
