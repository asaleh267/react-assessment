import { createAction } from "redux-act";
import { OfficeInfo } from "../types";

export const saveOfficeInfoData = createAction<OfficeInfo>("save office info data");