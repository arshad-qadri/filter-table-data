import { FILTER_DATA } from "../types";

export const filterData = (data) => {
  return {
    type: FILTER_DATA,
    payload: data,
  };
};
