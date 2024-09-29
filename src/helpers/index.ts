import INIT_REQUESTS from "../mockData/data.json";
import USERS from "../mockData/users.json";

export const saveRequestsInLocalStorage = (data: IRequest[]) =>
  localStorage.setItem("requests", JSON.stringify(data));

export const getSavedRequests = () => {
  const requests = localStorage.getItem("requests");
  try {
    return requests ? JSON.parse(requests) : INIT_REQUESTS;
  } catch {
    return INIT_REQUESTS;
  }
};

export const getUser = (id: string | undefined): IUser | undefined =>
  USERS?.find((u) => u.id === id);
