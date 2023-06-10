import { useReducer } from "react";

const ACTIONS = {
  UPDATE_KEYWORD: "keyword",
  UPDATE_RATING: "rating",
};

//TODO: agregar reducer de language, ver api param 'lang'
//TODO: agregar reducer reset filters
const ACTIONS_REDUCERS = {
  [ACTIONS.UPDATE_KEYWORD]: (state, action) => ({
    ...state,
    keyword: action.payload,
    times: state.times + 1,
  }),
  [ACTIONS.UPDATE_RATING]: (state, action) => ({ ...state, rating: action.payload }),
};

const REDUCER = (state, action) => {
  const actionReducer = ACTIONS_REDUCERS[action.type];
  return actionReducer ? actionReducer(state, action) : state;
};

export default function useForm({ initialKeyword, initialRating }) {
  const [state, dispatch] = useReducer(REDUCER, {
    keyword: decodeURIComponent(initialKeyword),
    rating: initialRating,
    times: 0,
  });

  const { keyword, rating, times } = state;

  //TODO: pasar funciones a useCallback
  return {
    keyword,
    rating,
    times,
    updateKeyword: (keyword) => dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: keyword }),
    updateRating: (rating) => dispatch({ type: ACTIONS.UPDATE_RATING, payload: rating }),
  };
}
