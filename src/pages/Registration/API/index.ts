import { axiosNetCore } from "../../../utils/axiosUtils";
import { PersonalInfo } from "../../PersonalInfo/types";

export const submitPersonalInfo = (
    body: PersonalInfo
  ) => {
    const url = `/FileStorage/AcknowledgeCreateFileStorageDetail`;
    return axiosNetCore
    .get(url)
    .then(res => res);
  };
  