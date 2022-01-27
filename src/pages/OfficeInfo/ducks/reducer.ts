import { createReducer } from "redux-act";
import * as actions from "./actions";
import { OfficeInfo } from "../types";

export interface OfficeInfoState {
    officeInfo: OfficeInfo;
    isLoading: boolean;
}

export const defaultState: OfficeInfoState = {
    officeInfo: {
      buildingName: "",
      area:"",
      landLineNumber: "",
      addressLine1: "",
      addressLine2: "",
      poBoxNumber: ""
    },
  isLoading: false
};

const officeInfoReducer = createReducer<OfficeInfoState>({}, defaultState)
  .on(actions.saveOfficeInfoData, (state, payload) => ({
    officeInfo: payload,
    isLoading: true,
  }));

export default officeInfoReducer;
