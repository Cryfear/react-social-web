import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "5a4a4cab-dd1a-4ce8-9fbb-6e3e88253792",
  },
});

export const UsersApi = {
  getUser(currentPage = 1, countView = 5) {
    console.log(currentPage, countView);
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
};
