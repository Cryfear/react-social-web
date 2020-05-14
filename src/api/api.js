import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "ce589410-937a-4a90-9f36-92646358e61a",
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
    return instance.get(`profile/${userId}`).then((response) => {
      return response.data;
    });
  },
};

export const myProfileApi = {
  getMe() {
    return instance.get("auth/me").then((response) => {
      return response.data.data;
    });
  },
  getStatus(id) {
    return instance.get(`profile/status/${id}`).then((response) => {
      return response.data;
    });
  },
  setStatus(status) {
    return instance.put(`profile/status`, {
      status,
    });
  },
};

export const AuthApi = {
  login(email, password, rememberMe) {
    return instance
      .post(`auth/login`, {
        email,
        password,
        rememberMe,
      })
      .then((response) => response.data);
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};
