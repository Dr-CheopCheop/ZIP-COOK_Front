import { SET_CURRENT_USER, SET_DEFULT_USER } from "./loginAction";
import { LoginProps } from "../constants/interfaces";

export const setlogin = (username : LoginProps) => ({
  type: SET_CURRENT_USER,
});