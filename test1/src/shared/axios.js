import axios from "axios";

const base = {
    server_http: process.env.REACT_APP_HTTP_URI,
    server_https: process.env.REACT_APP_HTTPS_URI
};

const api = axios.create({
    baseURL: base.server_https,
    header: {
        "content-type": "application/json; charset=UTF-8",
        accept: "application/json",
        withCredential: true,
    },
});

api.interceptors.request.use(function(config) {
    const auth = localStorage.getItem("access-token");
    const auth2 = localStorage.getItem("refresh-token");
    config.headers.common["Authorization"] = auth;
    config.headers.common["RefreshToken"] = auth2;

    return config;
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        const auth = localStorage.getItem("access-token");
        const auth2 = localStorage.getItem("refresh-token");
        if (error.response && error.response.status === 403) {
            return api
                .post(`/member/logout`, {
                    headers: {
                        Authorization: auth,
                        RefreshToken: auth2,
                    },
                })
                .then((res) => {
                    if(res.data.success) {
                        window.location.href="/";
                    }
                });
        }
    }
);

export const apis = {

    logout: () => api.post(`/members/logout`),

};


