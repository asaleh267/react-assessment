import { createAction } from "redux-act";
import { Confirmation } from "../types";

export const saveConfirmationData = createAction("save confirmation data");
export const saveConfirmationDataSucceeded = createAction("save confirmation data success");
export const saveConfirmationDataFailed = createAction("save confirmation data failure");

export const addAttachment = createAction<Confirmation['imageFile']>("add Attachment");
export const removeAttachment = createAction("remove Attachment");

export const addSignature = createAction<string>("add Attachment");
