import { createAction } from "redux-act";
import { PersonalInfo } from "../types";

export const savePersonalInfoData = createAction("save personal info data");
export const savePersonalInfoDataSucceeded = createAction<PersonalInfo>("save personal info data success");
export const savePersonalInfoDataFailed = createAction("save personal info data failure");