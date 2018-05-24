import * as loginActions from "./actions";
import {ActionType} from "typesafe-actions";

export const LOGIN_ACTION_TYPE = "Action/Login";
export const LOGGED_IN_ACTION_TYPE = "Action/LoggedIn";

export type LoginActions = ActionType<typeof loginActions>