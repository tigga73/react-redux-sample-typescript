import { ActionType } from './actionType';

interface SeachRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface SeachRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | SeachRepositoriesAction
  | SeachRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;
