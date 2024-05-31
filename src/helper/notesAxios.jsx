import { apiProcesser } from "./axiosHelper";

const serverEP = import.meta.env.VITE_SERVER_URL;
const notesEP = serverEP + "/notes";
const singleNoteEP = notesEP + "/note";

export const postNewNote = async ({ _id, ...rest }) => {
  const axiosObj = {
    method: "post",
    url: notesEP,
    data: rest,
    _id,
  };
  return await apiProcesser(axiosObj);
};

export const fetchNotes = async (_id) => {
  const axiosObj = {
    method: "get",
    url: notesEP,
    _id,
  };
  return await apiProcesser(axiosObj);
};

export const fetchSingleNote = async (_id) => {
  const axiosObj = {
    method: "get",
    url: singleNoteEP,
    _id,
  };
  return await apiProcesser(axiosObj);
};

export const deleteOneNote = async (_id) => {
  const axiosObj = {
    method: "delete",
    url: notesEP,
    _id,
  };
  return await apiProcesser(axiosObj);
};
