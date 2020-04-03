let state = {
    token: null
};

export const logOut = () => {
    return new Promise((resolve) => {
        state.token = null;
        localStorage.removeItem('token');
        resolve();
    })

};

export const setToken = (token) => {
    localStorage.setItem('token', token);
    state.token = token;
};

//   const getToken = () => {
//     const token = state.token ? state.token :
//       localStorage.getItem('token') ? localStorage.getItem('token') :
//         null;
//     // console.log(localStorage.getItem(token));
//     return token;
//   };

export const isLogin = () => {
    return state.token || localStorage.getItem('token');
};

