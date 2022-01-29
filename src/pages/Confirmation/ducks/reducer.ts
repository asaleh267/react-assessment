import { createReducer } from "redux-act";
import * as actions from "./actions";
import { Confirmation } from "../types";

export interface ConfirmationState {
  confirmation: Confirmation;
  isLoading: boolean;
}

export const defaultState: ConfirmationState = {
  confirmation: {
    imageFile: {
      id: "",
      name: "",
      fileUrl: ""
    },
    signatureUrl: ""
  },
  isLoading: false
};

const confirmationReducer = createReducer<ConfirmationState>({}, defaultState)
  .on(actions.saveConfirmationData, (state, payload) => { 
    console.log("text")
    return {
    ...state,
    isLoading: true,
  }})
  .on(actions.saveConfirmationDataSucceeded, (state, payload) => ({
    ...state,
    isLoading: false,
  }))
  .on(actions.saveConfirmationDataFailed, (state, payload) => ({
    ...state,
    isLoading: false,
  }))
  .on(actions.addAttachment, (state, payload) => ({
    ...state,
    confirmation: {
      ...state.confirmation,
      imageFile: payload
    }
  }))
  .on(actions.removeAttachment, (state, payload) => ({
    ...state,
    confirmation: {
      ...state.confirmation,
      imageFile: {...defaultState.confirmation.imageFile}
    }
  }))
  .on(actions.addSignature, (state, payload) => ({
    ...state,
    confirmation: {
      ...state.confirmation,
      signatureUrl: payload
    }
  }))

export default confirmationReducer;
