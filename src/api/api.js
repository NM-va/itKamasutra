import * as axios from 'axios/index';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '968a1a28-eb55-43a7-89bc-ff44bc6685f0'
  }
});

export const userAPI = {
  getUsers (currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      });
    //delete all start then ?
  },
  
  follow(userId) {
    return instance.post(`follow/${userId}`)
      .then(response => {
        return response.data;
      });
  },
  
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
      .then(response => {
        return response.data;
      });
  },
  
  getProfile(userId) {
    console.log('Obsolete method. Please profileAPI object.');
    return profileAPI.getProfile(userId);
  }
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}` )
      // .then(response => {
      //   return response.data;
      // });
  },
  
  getStatus(userId) {
    return instance.get(`profile/status/${userId}` );
  },
  
  updateStatus(status) {
    return instance.put(`profile/status`, {status: status});
  }
};


export const authAPI = {
  getAuthMe() {
    return instance.get(`auth/me` )
      .then(response => {
        return response.data;
      });
  },
  
  login(email, password, rememberMe = false) {
    return instance.post('auth/login', {email, password, rememberMe});
  },

  logout() {
    return instance.delete('auth/login');
  }
};

// export const getUsers = (currentPage = 1, pageSize = 10) => {
//   return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
//     withCredentials: true
//   })
//     .then(response => {
//       return response.data;
//     });
// };
