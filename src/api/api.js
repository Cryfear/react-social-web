import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "9fc4f679-9027-4ffa-a42b-922addb0ee9f",
  },
});

export const UsersApi = {
  getUser(currentPage = 1, countView = 5) {
    return instance.get(`users?page=${currentPage}&count=${countView}`).then(response => {
      return response.data;
    });
  },
};

export const AuthApi = {
  getMe() {
    return instance.get('auth/me').then(response => {
      return response.data.data;
    })
  }
}

export const FollowApi = {
  follow(id) {
    return instance.post(`follow/${id}`).then(response => {
      return response.data
    })
  }
}

export const UnfollowApi = {
  unfollow(id) {
    return instance.delete(`follow/${id}`).then(response => {
      return response.data
    })
  }
}
