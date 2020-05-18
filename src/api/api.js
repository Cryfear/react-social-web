import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "591ceca4-f8e0-46f6-90c9-0469f12b883f",
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
  getMyProfile(userId, obj) {
    console.log(obj)
    return instance.put("profile", {
      userId: userId,
      AboutME: "lol",
      lookingForAJob: obj.lookingForAJob,
      lookingForAJobDescription: obj.lookingForAJobDescription,
      fullName: obj.fullName,
      contacts: {
        github: obj.contacts.github,
        vk: obj.contacts.vk,
        facebook: obj.contacts.facebook,
        instagram: obj.contacts.instagram,
        twitter: obj.contacts.twitter,
        website: obj.contacts.website,
        youtube: obj.contacts.youtube,
        mainLink: obj.contacts.mainLink,
      },
    }).then(response => response.data);
  },
};

export const myProfileApi = {
  setPhoto(file) {
    const formData = new FormData();
    formData.append("image", file);
    return instance.post(`profile/photo`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
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
