import { createReducer } from "redux-act";
import * as actions from "./actions";
import { PersonalInfo } from "../types";

export interface PersonalInfoState {
  personalInfo: PersonalInfo;
  isLoading: boolean;
}

export const defaultState: PersonalInfoState = {
  personalInfo: {
    name: "",
    email: "",
    addressLine1: "",
    addressLine2: "",
    addressLine3: "",
    mobileNumber: ""
  },
  isLoading: false
};

const personalInfoReducer = createReducer<PersonalInfoState>({}, defaultState)
  .on(actions.savePersonalInfoData, (state, payload) => ({
    ...state,
    isLoading: true,
  }))
  .on(actions.savePersonalInfoDataSucceeded, (state, payload) => ({
    personalInfo: payload,
    isLoading: false,
  }))
  .on(actions.savePersonalInfoDataFailed, (state, payload) => ({
    ...state,
    isLoading: false,
  }))

export default personalInfoReducer;
