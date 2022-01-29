import { createAction } from "redux-act";
import { OfficeInfo } from "../types";

export const saveOfficeInfoData = createAction("save office info data");
export const saveOfficeInfoDataSucceeded = createAction<OfficeInfo>("save office info data success");
export const saveOfficeInfoDataFailed = createAction("save office info data failure");