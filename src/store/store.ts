import { createContext, useContext } from 'react';

import { DEFAULT_USERS_LIST } from 'constants/consts';
import { uuid } from 'utils/uuid';

import { IStateModel, ActionTypesEnum, IActionModel } from './types';

export const initialState: IStateModel = {
  usersList: DEFAULT_USERS_LIST.map((item) => ({ ...item, id: uuid() })),
};

export const reducer = (state: IStateModel, { type, payload }: IActionModel): IStateModel => {
  switch (type) {
    case ActionTypesEnum.ADD_USER_INFO:
      return {
        ...state,
        userInfo: payload,
      };
    case ActionTypesEnum.UPDATE_SUGGESTIONS:
      return {
        ...state,
        userInfo: { ...(state.userInfo || { id: uuid() }), suggestions: payload.newList },
      };
    default:
      return state;
  }
};

export const Store = createContext({
  state: initialState,
  dispatch: (args: any) => {},
});

export const useStore = () => useContext(Store);
