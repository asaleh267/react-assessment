import { axiosNetCore } from "../../../utils/axiosUtils";
import { Confirmation } from "../../Confirmation/types";
import { OfficeInfo } from "../../OfficeInfo/types";
import { PersonalInfo } from "../../PersonalInfo/types";

export const submitPersonalInfo = (
    body: PersonalInfo
  ) => {
    return axiosNetCore
    .post("http://localhost:3001/personalInfo", body)
    .then(res => res);
  };
  
  export const submitOfficeInfo = (
    body: OfficeInfo
  ) => {
    return axiosNetCore
    .post("http://localhost:3001/officeInfo", body)
    .then(res => res);
  };
  
  export const confirmAttachments = (
    body: Confirmation
  ) => {
    return axiosNetCore
    .post("http://localhost:3001/confirmation", body)
    .then(res => res);
  };
  