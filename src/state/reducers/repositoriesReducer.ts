import { Action } from '../actions';
import { ActionType } from '../actions/actionType';

interface RepositorieState {
  data: string[];
  loading: boolean;
  error: string | null;
}

const initialState: RepositorieState = {
  data: [],
  loading: false,
  error: null,
};

const reducer = (
  state: RepositorieState = initialState,
  action: Action,
): RepositorieState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };

    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };

    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};

export default reducer;
