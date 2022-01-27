import { createAction } from "redux-act";
import { PersonalInfo } from "../types";

export const savePersonalInfoDate = createAction<PersonalInfo>("save personal info data");