import { createSelector } from "reselect";
import { RootState } from "../../../app/store";
import { Confirmation } from "../types";
import { ConfirmationState } from "./reducer";

export const ConfirmationSelector = (state: RootState): ConfirmationState => {
  return state.confirmation
};

export const selectIsLoading = createSelector(
  ConfirmationSelector,
  (state): boolean => state.isLoading
);

export const selectConfirmation = createSelector(
  ConfirmationSelector,
  (state): Confirmation => state.confirmation
);
