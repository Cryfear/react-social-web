import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "847584be-875a-447e-a8de-bc04be36d8de",
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
