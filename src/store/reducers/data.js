import { GET_DATA } from "../action-creators/data";

import { SET_ACTIVE_ITEM } from "../action-creators/data";

const initialization = {
  data: [],
  activeItem: 0,
};

function dataReducer(state = initialization, action) {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        data: action.payload,
      };

    case SET_ACTIVE_ITEM:
      return {
        ...state,
        activeItem: action.payload,
      };

    default:
      return state;
  }
}

export default dataReducer;
