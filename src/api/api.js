import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "d2e63dcb-1a9a-438d-92e9-7beff376cab6",
  },
});

export const UsersApi = {
  getUser(currentPage = 1, countView = 5) {
    return instance
      .get(`users?page=${currentPage}&count=${countView}`)
      .then((response) => {
        return response.data;
      });
  },
  getMe() {
    return instance.get("auth/me").then((response) => {
      return response.data.data;
    });
  },
  follow(id) {
    return instance.post(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
  checkUser(userId) {
    return instance
      .get(`profile/${userId}`)
      .then((response) => {
        return response.data;
      });
  },
};
