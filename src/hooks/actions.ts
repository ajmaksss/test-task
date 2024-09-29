import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { requestsActions } from "../store/requests/requests.slice";

const actions = requestsActions;

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
