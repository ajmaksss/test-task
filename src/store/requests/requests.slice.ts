import { faker } from "@faker-js/faker";
import { createSlice } from "@reduxjs/toolkit";
import { getSavedRequests, saveRequestsInLocalStorage } from "../../helpers";

interface IInitialState {
  requests: IRequest[];
}

const initialState: IInitialState = {
  requests: getSavedRequests(),
};

export const requestsSlice = createSlice({
  name: "requests",
  initialState,
  reducers: {
    createRequest(state, action) {
      const updatedRequests = [
        {
          ...action.payload,
          id: faker.database.mongodbObjectId(),
          created_at: new Date().getTime(),
        },
        ...state.requests,
      ];
      state.requests = updatedRequests;
      saveRequestsInLocalStorage(updatedRequests);
    },
    editRequest(state, action) {
      const updatedRequests = state.requests.map((r) =>
        action.payload.id === r.id ? action.payload : r
      );
      state.requests = updatedRequests;
      saveRequestsInLocalStorage(updatedRequests);
    },
    deleteRequest(state, action) {
      const updatedRequests = state.requests.filter(
        (r) => action.payload !== r.id
      );
      state.requests = updatedRequests;
      saveRequestsInLocalStorage(updatedRequests);
    },
  },
});

export const requestsActions = requestsSlice.actions;
export const requestsReducer = requestsSlice.reducer;
