import { IUser } from "types";

export enum ActionTypesEnum {
  ADD_USER_INFO
}

export interface IStateModel {
  userInfo?: IUser,
  usersList?: IUser[],
}

export interface IActionModel {
  type: ActionTypesEnum;
  payload?: any;
}
