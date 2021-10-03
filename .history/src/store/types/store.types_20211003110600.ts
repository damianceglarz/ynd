import { ACTIONS } from "../action-types/action-types";

export type ActionType = {
  type: keyof typeof ACTIONS;
  payload: any;
};
