import { apiProcesser } from "./axiosHelper";

const serverEP = import.meta.env.VITE_SERVER_URL;
const notesEP = serverEP + "/notes";

export const postNewNote = async (obj) => {
  const axiosObj = {
    method: "post",
    url: notesEP,
    data: obj,
  };
  return await apiProcesser(axiosObj);
};

export const fetchNotes = async () => {
  const axiosObj = {
    method: "get",
    url: notesEP,
  };
  return await apiProcesser(axiosObj);
};

export const fetchSingleNote = async (_id) => {
  const axiosObj = {
    method: "get",
    url: `${notesEP}/${_id}`,
  };
  return await apiProcesser(axiosObj);
};

export const deleteOneNote = async (_id) => {
  const axiosObj = {
    method: "delete",
    url: `${notesEP}/${_id}`,
  };
  return await apiProcesser(axiosObj);
};
