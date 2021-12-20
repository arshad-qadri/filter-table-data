import allData from "../data";
import { FILTER_DATA } from "../types";

const initSatate = {
  data: allData,
};
const reducer = (state = initSatate, action) => {
  switch (action.type) {
    case FILTER_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
