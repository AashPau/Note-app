import { apiProcesser } from "../../helper/axiosHelper";

const serverEP = import.meta.env.VITE_SERVER_URL;
const userEP = serverEP + "/users";

export const postNewUser = async (obj) => {
  const axiosObj = {
    method: "post",
    url: userEP,
    data: obj,
  };
  return await apiProcesser(axiosObj);
};
